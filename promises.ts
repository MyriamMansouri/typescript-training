const performUpload = function(imgStatus: string) : Promise<{imgStatus: string}> {
    return new Promise((resolve) => {
        console.log(`Status ${imgStatus}`);
        setTimeout(()=> {
            resolve({imgStatus});
        }, 1000)
    })
}

let upload;
let compress;
let transfer;

performUpload('uploading...')
.then((res) => {
    upload = res;
    return performUpload('compessing')
})
.then((res) => {
    upload = res;
    return performUpload('transfering')
})
.then((res) => {
    upload = res;
    return performUpload('Image upload completed.')
})
