module MetaTags
  # This class is used by MetaTags gems to render HTML meta tags into page.
  class Renderer
    attr_reader :meta_tags, :normalized_meta_tags

    # Initialized a new instance of Renderer.
    #
    # @param [MetaTagsCollection] meta_tags meta tags object to render.
    #
    def initialize(meta_tags)
      @meta_tags = meta_tags
      @normalized_meta_tags = {}
    end

    # Renders meta tags on the page.
    #
    # @param [ActionView::Base] view Rails view object.
    def render(view)
      tags = []

      render_charset(tags)
      render_title(tags)
      render_icon(tags)
      render_with_normalization(tags, :description)
      render_with_normalization(tags, :keywords)
      render_refresh(tags)
      render_noindex(tags)
      render_alternate(tags)
      render_open_search(tags)
      render_links(tags)

      render_hashes(tags)
      render_custom(tags)

      tags.compact.map { |tag| tag.render(view) }.join("\n").html_safe
    end

    protected

    # Renders charset tag.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_charset(tags)
      charset = meta_tags.extract(:charset)
      tags << Tag.new(:meta, charset: charset) if charset.present?
    end

    # Renders title tag.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_title(tags)
      normalized_meta_tags[:title] = meta_tags.page_title
      normalized_meta_tags[:site] = meta_tags[:site]
      title = meta_tags.extract_full_title
      normalized_meta_tags[:full_title] = title
      tags << ContentTag.new(:title, content: title) if title.present?
    end

    # Renders icon(s) tag.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_icon(tags)
      icon = meta_tags.extract(:icon)
      return unless icon

      if icon.kind_of?(String)
        tags << Tag.new(:link, rel: 'icon', href: icon, type: 'image/x-icon')
      else
        icon = [icon] if icon.kind_of?(Hash)
        icon.each do |icon_params|
          icon_params = { rel: 'icon', type: 'image/x-icon' }.with_indifferent_access.merge(icon_params)
          tags << Tag.new(:link, icon_params)
        end
      end
    end

    # Renders meta tag with normalization (should have a corresponding normalize_
    # method in TextNormalizer).
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    # @see TextNormalizer
    #
    def render_with_normalization(tags, name)
      value = TextNormalizer.public_send("normalize_#{name}", meta_tags.extract(name))
      normalized_meta_tags[name] = value
      tags << Tag.new(:meta, name: name, content: value) if value.present?
    end

    # Renders noindex and nofollow meta tags.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_noindex(tags)
      meta_tags.extract_noindex.each do |name, content|
        tags << Tag.new(:meta, name: name, content: content) if content.present?
      end
    end

    # Renders refresh meta tag.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_refresh(tags)
      refresh = meta_tags.extract(:refresh)
      tags << Tag.new(:meta, 'http-equiv' => 'refresh', content: refresh.to_s) if refresh.present?
    end

    # Renders alternate link tags.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_alternate(tags)
      alternate = meta_tags.extract(:alternate)
      return unless alternate

      if alternate.kind_of?(Hash)
        alternate.each do |hreflang, href|
          tags << Tag.new(:link, rel: 'alternate', href: href, hreflang: hreflang) if href.present?
        end
      elsif alternate.kind_of?(Array)
        alternate.each do |link_params|
          tags << Tag.new(:link, { rel: 'alternate' }.with_indifferent_access.merge(link_params))
        end
      end
    end

    # Renders open_search link tag.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_open_search(tags)
      open_search = meta_tags.extract(:open_search)
      return unless open_search

      href = open_search[:href]
      title = open_search[:title]

      type = "application/opensearchdescription+xml"
      tags << Tag.new(:link, rel: 'search', type: type, href: href, title: title) if href.present?
    end

    # Renders links.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_links(tags)
      [ :amphtml, :canonical, :prev, :next, :image_src ].each do |tag_name|
        href = meta_tags.extract(tag_name)
        if href.present?
          @normalized_meta_tags[tag_name] = href
          tags << Tag.new(:link, rel: tag_name, href: href)
        end
      end
    end

    # Renders complex hash objects.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_hashes(tags, options = {})
      meta_tags.meta_tags.keys.each do |property|
        render_hash(tags, property, options)
      end
    end

    # Renders a complex hash object by key.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_hash(tags, key, options = {})
      data = meta_tags.meta_tags[key]
      return unless data.kind_of?(Hash)

      process_hash(tags, key, data, options)
      meta_tags.extract(key)
    end

    # Renders custom meta tags.
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    #
    def render_custom(tags)
      meta_tags.meta_tags.each do |name, data|
        Array(data).each do |val|
          tags << Tag.new(:meta, configured_name_key(name) => name, content: val)
        end
        meta_tags.extract(name)
      end
    end

    # Recursive method to process all the hashes and arrays on meta tags
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    # @param [String, Symbol] property a Hash or a String to render as meta tag.
    # @param [Hash, Array, String, Symbol] content text content or a symbol reference to
    # top-level meta tag.
    #
    def process_tree(tags, property, content, options = {})
      method = case content
               when Hash
                 :process_hash
               when Array
                 :process_array
               else
                 :render_tag
               end
      send(method, tags, property, content, options)
    end

    # Recursive method to process a hash with meta tags
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    # @param [String, Symbol] property a Hash or a String to render as meta tag.
    # @param [Hash] content nested meta tag attributes.
    #
    def process_hash(tags, property, content, options = {})
      content.each do |key, value|
        key = key.to_s == '_' ? property : "#{property}:#{key}"
        value = normalized_meta_tags[value] if value.kind_of?(Symbol)
        process_tree(tags, key, value, options)
      end
    end

    # Recursive method to process a hash with meta tags
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    # @param [String, Symbol] property a Hash or a String to render as meta tag.
    # @param [Array] content array of nested meta tag attributes or values.
    #
    def process_array(tags, property, content, options = {})
      content.each { |v| process_tree(tags, property, v, options) }
    end

    # Recursive method to process a hash with meta tags
    #
    # @param [Array<Tag>] tags a buffer object to store tag in.
    # @param [String, Symbol] name a Hash or a String to render as meta tag.
    # @param [String, Symbol] value text content or a symbol reference to
    # top-level meta tag.
    #
    def render_tag(tags, name, value, options = {})
      name_key = options.fetch(:name_key, configured_name_key(name))
      value_key = options.fetch(:value_key, :content)
      tags << Tag.new(:meta, name_key => name.to_s, value_key => value) unless value.blank?
    end

    # Returns meta tag property name for a give meta tag based on the
    # configured list of property tags in MetaTags::Configuration#property_tags.
    #
    # @param [String, Symbol] meta tag key.
    # @return [String] meta tag attribute name ("property" or "name").
    #
    def configured_name_key(name)
      is_property_tag = MetaTags.config.property_tags.any? do |tag_name|
        name.to_s.match(/^#{Regexp.escape(tag_name.to_s)}\b/)
      end
      is_property_tag ? :property : :name
    end
  end
end
