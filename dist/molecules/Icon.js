"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var theme_1 = require("../commons/theme");
var utils_1 = require("../commons/utils");
exports.Icon = function (props) {
    var fill = utils_1.getValueFromTheme(theme_1.colors, props.fill);
    var ic = getIcons(fill, props.name);
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: ic.width * props.scale, height: ic.height * props.scale, viewBox: "0 0 " + ic.width + " " + ic.height },
        React.createElement("g", { fill: "none", fillRule: "evenodd" }, ic.path)));
};
exports.Icon.defaultProps = {
    fill: "black.standard",
    scale: 1,
};
///////////////////////////////////////
// DO NOT MODIFY AUTO GENERATED CODE //
///////////////////////////////////////
var getIcons = function (fill, name) {
    var icons = {
        "arrow-down": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fill: fill, d: "M12 16.485l9.192-9.192a1 1 0 0 1 1.415 1.414l-9.9 9.9a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 1 1 1.415-1.414L12 16.485z" })
        },
        "arrow-left": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fill: fill, d: "M8.243 12.314l7.778-7.778a1 1 0 1 0-1.414-1.415L6.12 11.607a1 1 0 0 0 0 1.414l8.486 8.485a1 1 0 1 0 1.414-1.414l-7.778-7.778z" })
        },
        "arrow-right": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fill: fill, d: "M16.385 12.314L8.607 4.536A1 1 0 1 1 10.02 3.12l8.485 8.486a1 1 0 0 1 0 1.414l-8.485 8.485a1 1 0 1 1-1.414-1.414l7.778-7.778z" })
        },
        "arrow-up": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fill: fill, d: "M12 7.515l9.192 9.192a1 1 0 0 0 1.415-1.414l-9.9-9.9a1 1 0 0 0-1.414 0l-9.9 9.9a1 1 0 1 0 1.415 1.414L12 7.515z" })
        },
        "back": {
            width: 24,
            height: 24,
            path: React.createElement("g", { fill: fill, transform: "matrix(-1 0 0 1 24 0)" },
                React.createElement("path", { d: "M21.485 12l-9.192-9.192a1 1 0 0 1 1.414-1.415l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 1 1-1.414-1.415L21.485 12z" }),
                React.createElement("rect", { width: "22", height: "2", y: "11", rx: "1" }))
        },
        "check": {
            width: 14,
            height: 14,
            path: React.createElement("path", { fill: fill, d: "M6.01 9.667l6.188-6.187a.75.75 0 1 1 1.06 1.06l-6.717 6.718a.75.75 0 0 1-1.06 0L.53 6.308a.75.75 0 1 1 1.06-1.06l4.42 4.42z" })
        },
        "circle-info": {
            width: 16,
            height: 16,
            path: React.createElement("path", { fill: fill, d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm.83-9.357c0-.333-.089-.593-.267-.78a.894.894 0 0 0-.676-.28.861.861 0 0 0-.667.28c-.17.187-.256.465-.256.834v5.34c0 .364.085.644.256.84.171.196.393.294.667.294a.883.883 0 0 0 .676-.287c.178-.192.267-.474.267-.848V6.643zm-.923-1.928c.25 0 .467-.081.65-.243.182-.162.273-.386.273-.673 0-.296-.093-.522-.28-.677a.978.978 0 0 0-.643-.232c-.25 0-.47.085-.66.256a.841.841 0 0 0-.283.653c0 .291.092.517.277.677.184.16.406.239.666.239z" })
        },
        "circle-question": {
            width: 16,
            height: 16,
            path: React.createElement("path", { fill: fill, d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM4.615 5.665c0 .21.088.404.263.585.176.18.391.27.646.27.433 0 .727-.258.882-.773.164-.492.365-.865.602-1.118.237-.253.606-.379 1.107-.379.429 0 .778.125 1.05.376.27.25.406.558.406.923 0 .187-.044.36-.133.52a1.96 1.96 0 0 1-.328.433c-.13.13-.34.323-.632.578-.333.292-.597.544-.793.755a2.525 2.525 0 0 0-.472.739c-.119.28-.178.612-.178.994 0 .306.081.536.243.69a.832.832 0 0 0 .598.233c.456 0 .727-.237.813-.71.05-.224.088-.38.113-.469.025-.089.06-.178.106-.267.046-.088.115-.186.209-.294.093-.107.217-.23.372-.372.56-.501.95-.858 1.166-1.07.216-.212.403-.464.56-.755.158-.292.236-.631.236-1.019a2.44 2.44 0 0 0-.413-1.367c-.276-.42-.667-.75-1.173-.995-.506-.243-1.089-.365-1.75-.365-.71 0-1.333.145-1.866.437-.533.292-.939.66-1.217 1.104-.278.444-.417.883-.417 1.316zm3.336 7.492c.27 0 .506-.09.711-.273.205-.183.308-.433.308-.752a.985.985 0 0 0-.294-.725.985.985 0 0 0-.725-.294c-.291 0-.538.098-.738.294-.2.196-.3.438-.3.725 0 .323.103.575.31.755.208.18.45.27.728.27z" })
        },
        "circle-warning": {
            width: 16,
            height: 16,
            path: React.createElement("path", { fill: fill, d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-.72-7.34c.041.423.11.739.205.946.096.207.267.311.513.311a.537.537 0 0 0 .52-.321c.104-.214.173-.522.205-.923l.294-3.37c.032-.31.047-.615.047-.916 0-.51-.066-.901-.198-1.173-.132-.27-.394-.406-.786-.406-.323 0-.584.106-.783.317C7.1 3.337 7 3.632 7 4.011c0 .278.02.736.062 1.374l.218 3.274zm.76 4.497c.273 0 .512-.09.717-.273.205-.183.307-.433.307-.752a.971.971 0 0 0-.304-.721 1.013 1.013 0 0 0-.735-.298.99.99 0 0 0-.728.298.982.982 0 0 0-.297.72c0 .324.104.576.311.756.207.18.45.27.728.27z" })
        },
        "close": {
            width: 24,
            height: 24,
            path: React.createElement(React.Fragment, null,
                React.createElement("path", { d: "M0 0h24v24H0z", opacity: ".2" }),
                React.createElement("path", { fill: fill, d: "M13.414 12l9.193 9.192a1 1 0 1 1-1.415 1.415L12 13.414l-9.192 9.193a1 1 0 0 1-1.415-1.415L10.586 12 1.393 2.808a1 1 0 0 1 1.415-1.415L12 10.586l9.192-9.193a1 1 0 1 1 1.415 1.415L13.414 12z" }))
        },
        "crown": {
            width: 24,
            height: 24,
            path: React.createElement("g", { fill: fill, fillRule: "nonzero" },
                React.createElement("path", { d: "M5 17.026h14l.789-8.193a1 1 0 0 0-1.578-.909l-2.187 1.57a1 1 0 0 1-1.507-.43l-1.593-3.838a1 1 0 0 0-1.847 0L9.485 9.065a1 1 0 0 1-1.506.43l-2.19-1.57a1 1 0 0 0-1.578.908L5 17.026z" }),
                React.createElement("rect", { width: "14", height: "1", x: "5", y: "18", rx: ".5" }))
        },
        "done": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fill: fill, fillRule: "nonzero", d: "M22.408 14.4l-1.2-.7c-1.3-.8-1.3-2.7 0-3.5l1.2-.7c1-.6 1.3-1.8.7-2.7l-1-1.7c-.6-1-1.8-1.3-2.7-.7l-1.2.7c-1.3.8-3-.2-3-1.7V2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v1.3c0 1.5-1.7 2.5-3 1.7l-1.2-.6c-1-.6-2.2-.2-2.7.7l-1 1.7c-.5 1-.2 2.2.7 2.8l1.2.7c1.3.7 1.3 2.7 0 3.4l-1.2.7c-1 .6-1.3 1.8-.7 2.7l1 1.7c.6 1 1.8 1.3 2.7.7l1.2-.6c1.3-.8 3 .2 3 1.7V22c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-1.3c0-1.5 1.7-2.5 3-1.7l1.2.7c1 .6 2.2.2 2.7-.7l1-1.7c.5-1.1.2-2.3-.7-2.9zm-10.2 1.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" })
        },
        "giventake": {
            width: 24,
            height: 24,
            path: React.createElement("g", { fill: fill },
                React.createElement("path", { d: "M21.9 5.657L17.302 1.06a.5.5 0 1 1 .707-.707l4.95 4.95a.5.5 0 0 1 0 .706l-4.95 4.95a.5.5 0 0 1-.707-.707L21.9 5.657zM1.414 18.357l4.596 4.596a.5.5 0 0 1-.707.707l-4.95-4.95a.5.5 0 0 1 0-.707l4.95-4.95a.5.5 0 0 1 .707.708l-4.596 4.596z" }),
                React.createElement("rect", { width: "23", height: "1", x: "1", y: "18", rx: ".5" }),
                React.createElement("rect", { width: "23", height: "1", y: "5", rx: ".5" }))
        },
        "gridview": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fillRule: "nonzero", stroke: fill, d: "M4.5 4.5v6h6v-6h-6zm0 9v6h6v-6h-6zm9-9v6h6v-6h-6zm0 9v6h6v-6h-6z" })
        },
        "helpbadge": {
            width: 51,
            height: 20,
            path: React.createElement("path", { fill: fill, d: "M2 0h47a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm7.4 15h1.302v-4.844h4.788V15h1.288V4.738H15.49v4.298h-4.788V4.738H9.4V15zm10.192 0h6.076v-1.106h-4.774v-3.738h3.892V9.05h-3.892V5.83h4.62V4.738h-5.922V15zm8.232 0h5.782v-1.106h-4.48V4.738h-1.302V15zm7.588 0h1.302v-4.074h1.694c2.24 0 3.78-1.008 3.78-3.178 0-2.24-1.54-3.01-3.85-3.01h-2.926V15zm1.302-5.124V5.788h1.47c1.806 0 2.716.476 2.716 1.96 0 1.47-.854 2.128-2.66 2.128h-1.526z" })
        },
        "listview": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fill: fill, fillRule: "nonzero", d: "M5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4-6h10a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2zm0 6h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm-4 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" })
        },
        "next": {
            width: 24,
            height: 24,
            path: React.createElement("g", { fill: fill },
                React.createElement("path", { d: "M21.485 12l-9.192-9.192a1 1 0 0 1 1.414-1.415l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 1 1-1.414-1.415L21.485 12z" }),
                React.createElement("rect", { width: "22", height: "2", y: "11", rx: "1" }))
        },
        "search": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fillRule: "nonzero", stroke: "#000", strokeWidth: "2", d: "M14.69 14.69l.55-.684A7.96 7.96 0 0 0 17 9a8 8 0 1 0-8 8 7.96 7.96 0 0 0 5.006-1.76l.685-.55z" })
        },
        "selectall": {
            width: 24,
            height: 24,
            path: React.createElement("path", { fill: fill, fillRule: "nonzero", d: "M8.811 10.522l-1.089 1.09 3.5 3.5L19 7.332l-1.089-1.089-6.689 6.69-2.41-2.412zm8.633 6.922H6.556V6.556h7.777V5H6.556C5.7 5 5 5.7 5 6.556v10.888C5 18.3 5.7 19 6.556 19h10.888C18.3 19 19 18.3 19 17.444v-6.222h-1.556v6.222z" })
        },
        "step": {
            width: 40,
            height: 40,
            path: React.createElement("path", { fill: fill, d: "M16.9 26.627l13.435-13.435a1 1 0 1 1 1.414 1.415L17.607 28.749a1 1 0 0 1-1.415 0l-8.485-8.486a1 1 0 1 1 1.414-1.414l7.778 7.778z" })
        },
        "upload": {
            width: 24,
            height: 24,
            path: React.createElement("g", { fillRule: "nonzero" },
                React.createElement("rect", { width: "1", height: "13", x: "12", y: "5", fill: fill, rx: ".5" }),
                React.createElement("path", { fill: fill, d: "M12.854 3.904l4.242 4.242a.5.5 0 1 1-.707.708L12.5 4.964l-3.89 3.89a.5.5 0 0 1-.706-.708l4.242-4.242a.5.5 0 0 1 .708 0z" }),
                React.createElement("path", { stroke: fill, strokeLinecap: "round", strokeLinejoin: "round", d: "M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4" }))
        },
        "reload": {
            width: 24,
            height: 24,
            path: React.createElement("g", { fill: "none", "fill-rule": "evenodd" },
                React.createElement("g", { transform: "translate(-288 -1900)" },
                    React.createElement("path", { fill: "#FFF", d: "M0 0h1085v3046H0z" })),
                React.createElement("path", { d: "M-2-2h27.27v27.27H-2z" }),
                React.createElement("path", { stroke: fill, "stroke-linecap": "round", "stroke-width": "2", d: "M19.816 1.818v4.908h-4.909" }),
                React.createElement("path", { stroke: fill, "stroke-linecap": "round", "stroke-width": "2", d: "M2.363 11.635a9.27 9.27 0 0 1 9.271-9.272 9.248 9.248 0 0 1 7.805 4.265M3.454 21.452v-4.909h4.908" }),
                React.createElement("path", { stroke: fill, "stroke-linecap": "round", "stroke-width": "2", d: "M20.907 11.635a9.27 9.27 0 0 1-9.272 9.271 9.25 9.25 0 0 1-7.804-4.264" }))
        }
    };
    return icons[name];
};
