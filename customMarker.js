var customMarker = {

    CreateCustomMarker: function (map, markerdata) {

        var c = document.createElement("canvas");
        c.width = 37;
        c.height = 68;
        var img = new Image;
        var context = c.getContext("2d");
        img.src = "images/marker_" + markerdata.markerColor + ".png";

        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.fillStyle = markerdata.markerColor;
            context.fillRect(3, 20, 32, 17);
            context.stroke();
            context.font = "bold 17px arial";
            context.fillStyle = 'white';
            context.fillText(markerdata.number, 5, 34);
            context.fillStyle = markerdata.indicatorColor;
            context.arc(26, 9, 9, 0, Math.PI * 2, true);
            context.fill();
    
            new google.maps.Marker({
                map: map,
                icon: c.toDataURL(),
                title: markerdata.title,
                position: markerdata.position
            });
        };
    }
}