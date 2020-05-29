export let required = propertyType => {
    return v => (v && v.length > 0) || `必须输入 ${propertyType}`;
};
let minLength = (propertyType, minLength) => {
    return v =>
        (v && v.length >= minLength) ||
        `${propertyType} 必须大于 ${minLength} 字符`;
};
let maxLength = (propertyType, maxLength) => {
    return v =>
        (v && v.length <= maxLength) ||
        `${propertyType} 必须少于 ${maxLength} 字符`;
};

let emailFormat = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/;
    return v => (v && regex.test(v)) || "必须是有效的 E-mail";
};

let fileSize = () => {
    return v => v.size < 2 * 1024 * 1024 || "文件大小必须小于2m";
};

let imageType = () => {
    return v =>
        v.type.indexOf(["image/jpeg", "image/jpg", "image/png"]) !== -1 ||
        "文件类型需是jpeg,jpg,png";
};

let comparedPwd = first => {
    return v => v === first || "两次密码不一致";
};

export default {
    required,
    minLength,
    maxLength,
    emailFormat,
    comparedPwd,
    fileSize,
    imageType
};
