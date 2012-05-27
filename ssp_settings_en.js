window.ssp_settings_template_en = {
    'services' : {
        'facebook' : {
            'status'            : 'on',
            'dummy_img'         : 'images/dummy_facebook_en.png',
            'action'            : 'recommend',
            'txt_info'          : '2 clicks for better privacy:<br> As long as this button is inactive, Facebook can not track your visit here. If you decide to recommend this page on Facebook, you can activate the Facebook button. Facebook might know about your visit, but you intend this to be public information anyway.<br>For more information, click on the <strong>i</strong>',
            'txt_fb_off'        : 'not connected to Facebook',
            'txt_fb_on'         : 'connected to Facebook',
            'perma_option'      : 'off',
            'display_name'      : 'Facebook',
            'language'          : 'en_US'
        }, 
        'twitter' : {
            'status'            : 'on', 
            'dummy_img'         : 'images/dummy_twitter.png',
            'txt_info'          : '2 clicks for better privacy:<br> As long as this button is inactive, Twitter can not track your visit here. If you decide to tweet about this page, you can activate the Twitter button. Twitter might know about your visit, but you intend this to be public information anyway.<br>For more information, click on the <strong>i</strong>',
            'txt_twitter_off'   : 'not connected to Twitter',
            'txt_twitter_on'    : 'connected to Twitter',
            'perma_option'      : 'off',
            'display_name'      : 'Twitter',
            'language'          : 'en'
        },
        'gplus' : {
            'status'            : 'on',
            'dummy_img'         : 'images/dummy_gplus.png',
            'txt_info'          : '2 clicks for better privacy:<br> As long as this button is inactive, Google+ can not track your visit here. If you decide to recommend this page on Google+, you can activate the Google+ button. Google+ might know about your visit, but you intend this to be public information anyway.<br>For more information, click on the <strong>i</strong>',
            'txt_gplus_off'     : 'not connected to Google+',
            'txt_gplus_on'      : 'connected to Google+',
            'perma_option'      : 'off',
            'display_name'      : 'Google+',
            'language'          : 'en'
        }
    },
    'info_link'         : 'http://thedod.github.com/socialshareprivacy/about.html',
    'txt_help'          : 'If you activate these widgets, your visit here will be tracked by Facebook, Twitter and/or Google.<br>Click on the <strong>i</strong> for more information',
    'settings_perma'    : 'Automatically enable widgets on this site for:',
    'cookie_path'       : '/',
    'cookie_expires'    : '365',
    'css_path'          : 'socialshareprivacy.css',
    'media_prefix'        : 'socialshareprivacy/'
};

window.ssp_settings_en = function(settings) {
  settings = $.extend(true,{}, window.ssp_settings_template_en, settings||{});
  settings.css_path = settings.media_prefix+settings.css_path;
  for (service in settings.services) {
    settings.services[service].dummy_img = settings.media_prefix+settings.services[service].dummy_img;
  }
  return settings;
}
