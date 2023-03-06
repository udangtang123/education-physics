// Created by iWeb 3.0.4 local-build-20161217
setTransparentGifURL('Media/transparent.gif');

function applyEffects() {
    var registry = IWCreateEffectRegistry();
    registry.registerEffects({
        shadow_0: new IWShadow({
            blurRadius: 4,
            offset: new IWPoint(1.4142, 1.4142),
            color: '#000000',
            opacity: 0.500000
        })
    });
    registry.applyEffects();
}

function hostedOnDM() {
    return false;
}

function onPageLoad() {
    Widget.onload();
    fixAllIEPNGs('Media/transparent.gif');
    applyEffects()
}

function onPageUnload() {
    Widget.onunload();
}