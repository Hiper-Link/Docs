# 后端


无论是使用哪种语言编写的插件，都存在有Interaction事件。

该事件接收了上文所阐述的"function"字段，依据此字段可以进行交互。

其中json_text为返回的JSON文本。

``` go
func (API) Interaction(p string, function string) (string, error) {
	var json_text = "";
	switch function {
	case "xxx":
		//todo
	}
	return json_text, nil
}
```
``` rust
async fn interaction(
    &self,
    _request: Request<InteractionRequest>,
) -> Result<Response<InteractionResponse>, Status> {
    let mut json_text = "".to_string();

	match &function as &str{
        "xxx" => {
			// todo
		},

		_ => {}
	}

    let reply = hiper_link::InteractionResponse {value : json_text.into()};
    Ok(Response::new(reply))
}
```