export function getUrl(param : string, queryParams ?: any) {
    
    let finalUrl = window.location.host + '/' + param;
    if (queryParams) {
        let urlParamString = new URLSearchParams(queryParams)
        finalUrl += urlParamString.toString()
    }

    return finalUrl;
}