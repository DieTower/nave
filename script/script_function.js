function $(element,context) {
    if(!context) {
        return document.querySelector(element);
    } else {
        let newContext = document.querySelector(context);
        return newContext.querySelector(element);
    }
}