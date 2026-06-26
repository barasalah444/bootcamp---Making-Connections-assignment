// 1. تغيير الاسم عند الضغط على زر التعديل (Edit Profile)
const editProfileBtn = document.getElementById('edit-profile-btn');
const profileName = document.getElementById('profile-name');

editProfileBtn.addEventListener('click', function(event) {
    event.preventDefault(); // يمنع الرابط من عمل تحديث أو قفز للصفحة
    
    // التبديل بين الاسم الحالي واسم آخر عند الضغط للتحقق من عمله
    if (profileName.innerText === "Jane Doe") {
        profileName.innerText = "Bara Salah";
    } else {
        profileName.innerText = "Jane Doe";
    }
});


// 2. معالجة طلبات الاتصال (حذف السطر، تقليل طلبات الاتصال، زيادة الأصدقاء عند القبول)
function handleRequest(element, isAccepted) {
    const requestsCountElement = document.getElementById('requests-count');
    const connectionsCountElement = document.getElementById('connections-count');
    
    // جلب القيم الحالية وتحويلها إلى أرقام صحيحة لعمل الحسابات
    let currentRequests = parseInt(requestsCountElement.innerText);
    let currentConnections = parseInt(connectionsCountElement.innerText);
    
    // تقليل عداد طلبات الاتصال (للقبول والرفض على حد سواء)
    if (currentRequests > 0) {
        requestsCountElement.innerText = currentRequests - 1;
    }
    
    // زيادة العداد الخاص بـ Your Connections في حال تم القبول (true)
    if (isAccepted) {
        connectionsCountElement.innerText = currentConnections + 1;
    }
    
    // حذف العنصر من القائمة مباشرة وبشكل كامل
    const listItem = element.closest('.list-item');
    listItem.remove();
}