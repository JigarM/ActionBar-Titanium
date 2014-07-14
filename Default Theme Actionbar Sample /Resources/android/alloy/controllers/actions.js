function Controller() {
    function __alloyId3() {
        $.__views.index.removeEventListener("open", __alloyId3);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId0 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "images/action_about.png",
                title: "About",
                id: "menu1"
            };
            $.__views.menu1 = e.menu.add(_.pick(__alloyId0, Alloy.Android.menuItemCreateArgs));
            $.__views.menu1.applyProperties(_.omit(__alloyId0, Alloy.Android.menuItemCreateArgs));
            buttonClicked ? $.__views.menu1.addEventListener("click", buttonClicked) : __defers["$.__views.menu1!click!buttonClicked"] = true;
            var __alloyId1 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "images/action_settings.png",
                title: "Settings",
                id: "menu2"
            };
            $.__views.menu2 = e.menu.add(_.pick(__alloyId1, Alloy.Android.menuItemCreateArgs));
            $.__views.menu2.applyProperties(_.omit(__alloyId1, Alloy.Android.menuItemCreateArgs));
            buttonClicked ? $.__views.menu2.addEventListener("click", buttonClicked) : __defers["$.__views.menu2!click!buttonClicked"] = true;
            var __alloyId2 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER,
                title: "Help",
                id: "menu3"
            };
            $.__views.menu3 = e.menu.add(_.pick(__alloyId2, Alloy.Android.menuItemCreateArgs));
            $.__views.menu3.applyProperties(_.omit(__alloyId2, Alloy.Android.menuItemCreateArgs));
            buttonClicked ? $.__views.menu3.addEventListener("click", buttonClicked) : __defers["$.__views.menu3!click!buttonClicked"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function buttonClicked(e) {
        alert(e.source.title + " Cliked..");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "actions";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.index.addEventListener("open", __alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18sp"
        },
        text: "Action Button Screnn",
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.index.getActivity().actionBar;
            actionBar.setTitle("Actionbar");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.onHomeIconItemSelected = function() {
                $.index.close();
            };
            $.index.getActivity().invalidateOptionsMenu();
        }
    });
    __defers["$.__views.menu1!click!buttonClicked"] && $.__views.menu1.addEventListener("click", buttonClicked);
    __defers["$.__views.menu2!click!buttonClicked"] && $.__views.menu2.addEventListener("click", buttonClicked);
    __defers["$.__views.menu3!click!buttonClicked"] && $.__views.menu3.addEventListener("click", buttonClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;