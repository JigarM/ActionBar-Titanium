function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId8 = [];
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1"
    });
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18sp"
        },
        text: "Tab 1",
        id: "__alloyId9"
    });
    $.__views.win1.add($.__views.__alloyId9);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.win1,
        id: "tab1",
        title: "Tab 1"
    });
    __alloyId8.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2"
    });
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18sp"
        },
        text: "Tab 2",
        id: "__alloyId10"
    });
    $.__views.win2.add($.__views.__alloyId10);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.win2,
        id: "tab2",
        title: "Tab 2"
    });
    __alloyId8.push($.__views.tab2);
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3"
    });
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18sp"
        },
        text: "Tab 3",
        id: "__alloyId11"
    });
    $.__views.win3.add($.__views.__alloyId11);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.win3,
        id: "tab3",
        title: "Tab 3"
    });
    __alloyId8.push($.__views.tab3);
    $.__views.main = Ti.UI.createTabGroup({
        tabs: __alloyId8,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.main.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.main.getActivity().actionBar;
            actionBar.setTitle("Tabs");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.onHomeIconItemSelected = function() {
                $.main.close();
            };
            $.main.getActivity().invalidateOptionsMenu();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;