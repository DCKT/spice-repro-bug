

import * as Spice from "../node_modules/@greenlabs/ppx-spice/src/rescript/Spice.bs.js";
import * as Js_dict from "../node_modules/rescript/lib/es6/js_dict.js";
import * as Belt_Option from "../node_modules/rescript/lib/es6/belt_Option.js";

function t_encode(v) {
  return "m³";
}

function t_decode(v) {
  if (!Array.isArray(v) && (v === null || typeof v !== "object") && typeof v !== "number" && typeof v !== "string" && typeof v !== "boolean") {
    return Spice.error(undefined, "Not a JSONString", v);
  }
  switch (typeof v) {
    case "string" :
        if ("m³" === v) {
          return {
                  TAG: "Ok",
                  _0: "M3"
                };
        } else {
          return Spice.error(undefined, "Not matched", v);
        }
    case "number" :
        if (m³ === v) {
          return {
                  TAG: "Ok",
                  _0: "M3"
                };
        } else {
          return Spice.error(undefined, "Not matched", v);
        }
    default:
      return Spice.error(undefined, "Not a JSONString", v);
  }
}

var Unit = {
  t_encode: t_encode,
  t_decode: t_decode
};

function test_encode(v) {
  return Js_dict.fromArray(Spice.filterOptional([[
                    "unit",
                    false,
                    "m³"
                  ]]));
}

function test_decode(v) {
  if (!Array.isArray(v) && (v === null || typeof v !== "object") && typeof v !== "number" && typeof v !== "string" && typeof v !== "boolean") {
    return Spice.error(undefined, "Not an object", v);
  }
  if (!(typeof v === "object" && !Array.isArray(v))) {
    return Spice.error(undefined, "Not an object", v);
  }
  var unit = t_decode(Belt_Option.getWithDefault(Js_dict.get(v, "unit"), null));
  if (unit.TAG === "Ok") {
    return {
            TAG: "Ok",
            _0: {
              unit: unit._0
            }
          };
  }
  var e = unit._0;
  return {
          TAG: "Error",
          _0: {
            path: ".unit" + e.path,
            message: e.message,
            value: e.value
          }
        };
}

var data = {
    "id": ""
  };

console.log(test_decode(data));

export {
  Unit ,
  test_encode ,
  test_decode ,
  data ,
}
/*  Not a pure module */
