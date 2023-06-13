export const Looper = () => {
    
    setTimeout (function(){
        var preloader = document.getElementById("page_loader")
        if(!preloader.classList.contains("done")){
            preloader.classList.add("done");
        }
    }, 1000);

    return ( 
    <div id="page_loader" className="preloader">
        <div className="loader"></div>
    </div>
    )
}