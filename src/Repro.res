module Unit = {
  @spice
  type t = | @spice.as("m³") M3
}

@spice
type test = {unit: Unit.t}

let data = %raw(`
  {
    "id": ""
  }
`)

Js.log(data->test_decode)
