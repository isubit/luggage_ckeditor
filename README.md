luggage_ckeditor
===============

Maintainers
===============
ISUITC

Michael Hofmockel

https://github.com/ISUITS/luggage_ckeditor

Features
================
A conservative implementation of the ckeditor in Drupal 7.

Text formats:
Wywiwyg - admin/config/content/formats/wysiwyg
- Allowed by authenticated
Filtered html - admin/config/content/formats/filtered_html
- Disallowed by all
- This text format is installed with the standard profile and is highly abused so I have encluded it so it is reset and unused.
Full html - admin/config/content/formats/full_html
- Disallowed by all
- This text format is installed with the standard profile and is highly abused so I have encluded it so it is reset and unused.

ckeditor config changes:
- I have altered the config to remove the "url" field from the image properties dialog so that users can not include images from othe domains.
- The only way to include an image is to use the insert module.
- I have also removed the image properties advanced dialogue tab as I do not want users to had classes or ID ...
- Users can not escape from the ckeditor and edit source.
- [Image2](http://ckeditor.com/addon/image2) plugin has been added for image caption support.

Principles:

Security
- Users need to be locked into uploading images through a Drupal field and unable to create img tags that point outside the host domain.
- Tags and tag attributes are highly limited

Simple
- simplier is easier to use.

Included
================
resources/ckeditor library and plugins.

luggage_ckeditor Drupal feature


Installation
===============

Commandline where DRUPAL_ROOT is the root of your Drupal site:

cd DRUPAL_ROOT/sites/all/modules

git clone https://github.com/ISUITC/luggage_ckeditor.git

cp -a luggage_ckeditor/resources/ckeditor ../../libraries/

drush en luggage_ckeditor

Dependencies
----------------

- better_formats
- ckeditor
- features
- image - core
- image_resize_filter
- insert
- wysiwyg_filter
