var customMarker = {

    CreateCustomMarker: function (map, markerdata) {

        var c = document.createElement("canvas");
        c.width = 37;
        c.height = 68;
        var img = new Image;

        img.src = "images/marker_" + markerdata.markerColor + ".png";

        img.onload = function () {
            c.getContext("2d").drawImage(img, 0, 0);
            c.getContext("2d").fillStyle = markerdata.markerColor;
            c.getContext("2d").fillRect(3, 20, 32, 17);
            c.getContext("2d").stroke();
            c.getContext("2d").font = "bold 17px arial";
            c.getContext("2d").fillStyle = 'white';
            c.getContext("2d").fillText(markerdata.number, 5, 34);

            new google.maps.Marker({
                map: map,
                icon: c.toDataURL(),
                title: markerdata.title,
                position: markerdata.position
            });
        };
    }
}