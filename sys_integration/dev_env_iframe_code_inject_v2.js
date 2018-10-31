if (window.location.ancestorOrigins[0] != undefined && window.location.ancestorOrigins[0].match('localhost')) {
    $('a').each(function(e) {
        if ($(this).hasClass('btn-primary')) {
            console.log('has class', $(this).hasClass('btn-primary'));
            $(this).attr('refhref', $(this).attr('href'));
            $(this).removeAttr("href");
        }
    });
    $(document).on("click", function(event) {
        var p2cSettings = $(event.target).closest('[data-p2c-settings]').attr('data-p2c-settings');
        var p2cResource = $(event.target).closest('[data-p2c-resource]').attr('data-p2c-resource');
        var p2cData = $(event.target).closest('[data-p2c]').attr('data-p2c');
        var p2cDataHtml = $(event.target).closest('[data-p2c]')[0].outerHTML;
		var p2cResourceObject = window[p2cResource];

        var dataToSend = {
            p2csettings: p2cSettings,
            p2cresource: p2cResource,
            p2cdata: p2cData,
            p2cdatahtml: p2cDataHtml,
			p2cresourceobject: p2cResourceObject
        }
        parent.postMessage(JSON.stringify(dataToSend), "*");
    });

    window.addEventListener('message', receiveData);
	
    function receiveData(evt) {
        if (evt.data.match('fullcustattr')) {
            let recData = JSON.parse(evt.data);
            $(recData.fullcustattr)[0].outerHTML = recData.updateddata;
        }
    };
}