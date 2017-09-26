module ApplicationHelper
  require "redcarpet"
  require "coderay"



  def show_meta_tags
    if display_meta_tags.blank?
      assign_meta_tags
    end
    display_meta_tags
  end

  def assign_meta_tags(options = {})
    defaults = t('meta_tags.defaults')
    options.reverse_merge!(defaults)

    site = options[:site]
    title = options[:title]
    description = options[:description]
    keywords = options[:keywords]
    image = options[:image].presence || image_url('wa_1.jpg')

    configs = {
        separator: '|',
        reverse: true,
        site: site,
        title: title,
        description: description,
        keywords: keywords,
        canonical: request.original_url,
        og: {
            type: 'article',
            title: title.presence || site,
            description: description,
            locale: 'ja_JP',
            url: request.original_url,
            image: image,
            site_name: site
        },
        twitter: {
            site: '@justin0370',
            card: 'summary',
        }
    }

    set_meta_tags(configs)
  end


  class HTMLwithCoderay < Redcarpet::Render::HTML
    def block_code(code, language)
      language = language.split(':')[0]

      case language.to_s
        when 'rb'
          lang = 'ruby'
        when 'yml'
          lang = 'yaml'
        when 'css'
          lang = 'css'
        when 'html'
          lang = 'html'
        when ''
          lang = 'md'
        else
          lang = language
      end

      CodeRay.scan(code, lang).div
    end
  end

  def markdown(text)
    html_render = HTMLwithCoderay.new(filter_html: true, hard_wrap: true)
    options = {
        autolink: true,
        space_after_headers: true,
        no_intra_emphasis: true,
        fenced_code_blocks: true,
        tables: true,
        hard_wrap: true,
        xhtml: true,
        lax_html_blocks: true,
        strikethrough: true
    }
    markdown = Redcarpet::Markdown.new(html_render, options)
    markdown.render(text)
  end
end
