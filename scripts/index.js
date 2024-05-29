document.addEventListener('DOMContentLoaded', (event) => {
    const actionCallImg = document.getElementById('action-call');
    const ActionFace =document.getElementById('action-face');
    const ActionEmail =document.getElementById('action-email');
    actionCallImg.addEventListener('mouseover', () => {
        actionCallImg.src = './images/actionCall.gif';
    });

    actionCallImg.addEventListener('mouseout', () => {
        actionCallImg.src = './images/Hinh-Da-Xoa-Nen/actionCall-0000.png';
    });
    ActionFace.addEventListener('mouseover', () => {
        ActionFace.src = './images/371907490_FACEBOOK_ICON_400.gif';
    });

    ActionFace.addEventListener('mouseout', () => {
        ActionFace.src = './images/facebook.png';
    });
    ActionEmail.addEventListener('mouseover', () => {
        ActionEmail.src = './images/EmailAction.gif';
    });

    ActionEmail.addEventListener('mouseout', () => {
        ActionEmail.src = './images/Hinh-Da-Xoa-Nen/EmailAction-0000.png';
    });
});
 