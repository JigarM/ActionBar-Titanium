function buttonClicked(e) {
    alert(e.source.title + " Cliked..");
}

$.index.addEventListener('open', function() {
    if (Ti.Platform.Android.API_LEVEL >= 11) {
        var actionBar = $.index.getActivity().actionBar;
        actionBar.setTitle('Actionbar');
        actionBar.setDisplayHomeAsUp(true);
        actionBar.onHomeIconItemSelected = function() {
            $.index.close();
        };
        $.index.getActivity().invalidateOptionsMenu();
    }

});

