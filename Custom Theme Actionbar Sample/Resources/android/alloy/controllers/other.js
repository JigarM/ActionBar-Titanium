function Controller() {
    function changeTitle() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.main.getActivity().actionBar;
            actionBar.setTitle("Other" == actionBar.getTitle() ? "Title" : "Other");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "other";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createWindow({
        fullscreen: false,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "Title",
        id: "__alloyId8"
    });
    $.__views.main.add($.__views.__alloyId8);
    changeTitle ? $.__views.__alloyId8.addEventListener("click", changeTitle) : __defers["$.__views.__alloyId8!click!changeTitle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.main.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.main.getActivity().actionBar;
            actionBar.setTitle("Other");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.onHomeIconItemSelected = function() {
                $.main.close();
            };
            $.main.getActivity().invalidateOptionsMenu();
        }
    });
    __defers["$.__views.__alloyId8!click!changeTitle"] && $.__views.__alloyId8.addEventListener("click", changeTitle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;