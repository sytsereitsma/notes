function patchMermaidCodeElementClass() {
	var elements = document.getElementsByClassName("language-mermaid");
	for(var i=0; i < elements.length; i+=1) {
		var element = elements.item(i);
		if (element.tagName.toLowerCase() == "code") {
			element.className = "mermaid";
		}
	}
}

patchMermaidCodeElementClass();
mermaid.initialize({startOnLoad:true});
