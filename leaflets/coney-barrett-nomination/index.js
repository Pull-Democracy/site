function leaflets(sheets, last_leaflet) {
    if (last_leaflet === undefined) {
        if (sheets > 1) {
            const leaflet = document.getElementById("leaflet");
            const next_leaflet = leaflet.cloneNode(true);
            leaflet.after(next_leaflet);
            return leaflets(sheets - 1, next_leaflet);
        }
        return undefined;
    }
    if (sheets > 1) {
        const next_leaflet = last_leaflet.cloneNode(true);
        last_leaflet.after(next_leaflet);
        return leaflets(sheets - 1, next_leaflet)
    }
    return undefined;
}


function page_two(sheets, last_leaflet) {
    if (last_leaflet === undefined) {
        if (sheets > 1) {
            const leaflet = document.getElementById("page-2");
            const next_leaflet = leaflet.cloneNode(true);
            leaflet.after(next_leaflet);
            return leaflets(sheets - 1, next_leaflet);
        }
        return undefined;
    }
    if (sheets > 1) {
        const next_leaflet = last_leaflet.cloneNode(true);
        last_leaflet.after(next_leaflet);
        return leaflets(sheets - 1, next_leaflet)
    }
    return undefined;
}
window.addEventListener("beforeprint", function(event) {
    leaflets(4)
    page_two(4)
});


