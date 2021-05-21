export const home = (req, res) => 
res.render("home", {pageTitle: "Home"}); // 첫번째는 템플릿 두번째는 템플릿에 전달될 객체 정보

export const search = (req, res) => 
res.render("search", {pageTitle: "Search"});

export const upload = (req, res) => 
res.render("upload", {pageTitle: "Upload"});

export const videoDetail = (req, res) => 
res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => 
res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => 
res.render("deleteVideo", {pageTitle: "Delete Video"});
