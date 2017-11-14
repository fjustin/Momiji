module ApplicationHelper
  require "redcarpet"
  require "coderay"

  def default_meta_tags
      {
        charset: 'utf-8',
        site: Settings.site.name,
        reverse: true,
        title: @page_title || Settings.site.meta.title,
        description: @page_description || Settings.site.meta.description,
        keywords: @page_keywords || Settings.site.meta.keywords,
        canonical: url_for(only_path: false, protocol: 'https'),
        icon: Settings.site.meta.favicon,
        og: default_og,
        twitter: default_twitter
      }
    end

    def default_og
      return if noindex?
      {
        title: @og_title || Settings.site.meta.og.title, # :title
        description: @og_description || Settings.site.meta.og.description, # :description
        type: Settings.site.meta.og.type,
        url: :canonical,
        image: page_og_image,
        site_name: Settings.site.name,
        locale: 'ja_JP'
      }
    end

    def page_og_image
      @page_image || image_url(Settings.site.meta.og.image)
    end

    def default_twitter
      return if noindex?
      {
        card: "summary_large_image",
        title: @twitter_title || Settings.site.meta.twitter.title,
        description: @twitter_description || Settings.site.meta.twitter.description,
        image: page_twitter_image
      }
    end

    def page_twitter_image
      @page_image || image_url(Settings.site.meta.twitter.image)
    end

    def noindex?
    end

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
