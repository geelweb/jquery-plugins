# Geelweb's jQuery plugins

A collection of jQuery plugins.

## Build from source

    npm install -g grunt-cli

    git clone https://github.com/geelweb/jquery-plugins.git
    cd jquery-plugins

    # Install the node module dependencies
    npm install

    # Build the lib with all plugins
    grunt uglify

    # For list the available tasks
    grunt --help

******

## filehandler.js

A jQuery plugin to handle uploaded files

### handleImageFile()

Display a preview of the uploaded image. Example:

    <div id="img_preview"></div>
    <input type="file" id="img" data-preview="img_preview" >

    <script src="geelweb-jquery.min.js"></script>
    <script>
    $('#img').handleImageFile();
    </script>

*Options*

**image_type**

Default: `/image.*/`

A regex the mimetype of the uploaded file must match. Example:

    $('#img').handleImageFile({'image_type': /image\/png/});

**image_width**

Default: `120`

The width of the preview. Example:

    $('#img').handleImageFile({'width': 250});

**error**

Default: `$('#error')`

An element to display error messages. Example:

    $('#img').handleImageFile({'error': $('#img1_error')});

******

## select.js

Extends jQuery to add some methods

### clear()

Clear a select element

    <select id="my_select">
        <option value="1">abc</option>
        <option value="2">def</option>
    </select>

    <script src="geelweb-jquery.min.js"></script>
    <script>
    $('#my_select').clear();
    </script>

Will update the select to

    <select id="my_select">
        <option value="">--------</option>
    </select>

*options*

**label**

Default: '--------'

The new option label. Example:

    $('#my_select').clear({'label': 'select a something else first'});

**value**

Default: ''

The new option value

    $('#my_select').clear({'value': 0});

******

## ajax.js

Ajax helpers

### ajaxUpdate()

Update an element when another element change

    <select id="first"></select>
    <select id="second" data-trigger="#first" data-url="/get-values/:value"></select>

    <script src="geelweb-jquery.min.js"></script>
    <script>
    $('#second').ajaxUpdate();
    </script>

*options*

Options ca be defined using parameters or html5 data attributes. Example

    <select id="first"></select>
    <select id="second"></select>

    <script>
    $('#second').ajaxUpdate({
        'trigger': '#first',
        'url': '/get-values/:value'
    });
    </script>


**trigger**

Default: ''

jQuery css-selector to the trigger field.

**url**

Default: ''

url to call to get the data. You can use `:value` in the url, it will be replace
by the trigger field value.

**event**

Default: 'change'

The event used to trigger the action.


**callback**

Default: `function(target, row) { $(target).append(new Option(row['fields']['label'], row['pk'])); }`

The callback to apply to each row of the data

## googlemap.js

### googleMap()

display a map

    <div class="gmap" style="width: 100%; height: 250px;"
        data-latlng="x,y"
      >
      <ul class="markers">
        <li data-notice=""
            data-latlng="x,y"
            data-heading="Home"
            data-body="Marker body"
            data-icon="marker-icon.png"
        ></li>
      </ul>
    </div>
