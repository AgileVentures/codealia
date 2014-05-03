module ApplicationHelper
  def parent_layout(layout)
    @view_flow.set(:layout, output_buffer)
    output = render(:file => "layouts/#{layout}")
    self.output_buffer = ActionView::OutputBuffer.new(output)
  end

  def language_switch_link
    locale = (params[:locale] == 'se' ? :en : :se)
    text_for_locale = {
      en: t('layouts.navbar.links.switch_to_EN'),
      se: t('layouts.navbar.links.switch_to_SE'),    }
    raw <<-HTML
      <li>#{link_to(text_for_locale[locale], root_url(locale: locale))}</li>
    HTML
  end

  def workshop_path(workshop, part)
    workshop_id = "workshop-#{workshop}"
    part_id = (part.to_s == 'intro' ? 'intro' : "part-#{part}")
    url_for(action: :show, controller: :learning,
            workshop_id: workshop_id, part_id: part_id)
  end

  def shared_meta_keywords
    'Codealia, Coding for Girls, Women in Technology, Coding for Kids'
  end

  def default_meta_description
    @default_meta_description ||= '' +
    'An Open Source Solution For Technology Education. Codealia seeks to level the playing field by ' +
    'developing a free open-source learning platform with an engaging curriculum targeting young girls. ' +
    'Our interactive program will foster collaboration, teamwork and open communication which will pave ' +
    'the way to future careers in the information technology field.'
  end
end
