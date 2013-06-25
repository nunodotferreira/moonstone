// Sample view

enyo.kind({
    name: "moon.sample.music.MainMenuNarrowSample",
    kind: "moon.Panel",
    titleAbove: "01",
    title: "Main Menu",
    titleBelow: "",
    components: [
        {
            kind: "moon.DataList",
            name: "menus",
            components: [
                {kind: "moon.Item", ontap: "onTap", bindFrom: "name"}
            ]
        }
    ],
    bindings: [
        {from: ".controller.menu", to: "$.menus.controller"}
    ]
});

// Sample model

enyo.ready(function(){
    var sampleModel0 = new enyo.Model({
        menu: new enyo.Collection([
            {name: "Browser video", open: "enyo.BrowseVideo", options: {}},
            {name: "Browser photos", open: "enyo.BrowsePhotos", options: {}},
            {name: "Browser music", open: "enyo.BrowseMusic", options: {}}
        ])
    });

//  Application to render sample

    new enyo.Application({
        view: {
            classes: "enyo-unselectable moon",
            components: [
                {kind: "enyo.Spotlight"},
                {
                    kind: "moon.sample.music.MainMenuNarrowSample",
                    controller: ".app.controllers.menuController",
                    classes: "enyo-fit",
                    style: "background-image: url(assets/livetv-background.png); background-size: 100% 100%;"
                }
            ]
        },
        controllers: [
            {
                name: "menuController", 
                kind: "enyo.ModelController",
                model: sampleModel0,
                onTap: function(inSender, inEvent) {
                    console.log("on Menu Tap: " + inEvent.originator.name);
                }
            }
        ]
    });
});