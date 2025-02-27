// פונקציית חיפוש שתעביר את המשתמש לחלק המתאים או לעמוד פרויקט
document.getElementById('search').addEventListener('input', function() {
    let query = this.value.toLowerCase(); // מקבל את הטקסט שהוזן
    let sections = {
        "תפריט": "#main",
        "היכולות שלי": "#skis",
        "הפרוייקטים שלי": "#shesh",
        "צור קשר": "#CU"
    };
    let projectLinks = {
        "רפואה": "/pages/projects/medical.html", // דוגמה לעמוד פרויקט
        "מיקרוסופט": "/pages/projects/microsoft.html",
        "אפל": "/pages/projects/apple.html"
    };

    // חיפוש לחלק פנימי בדף
    let foundSection = false;
    for (let key in sections) {
        if (key.toLowerCase().includes(query)) {
            window.location.hash = sections[key]; // משנה את ה-URL כך שיתואם לחלק המתאים
            foundSection = true; // מצאנו התאמה לחלק פנימי בדף
            break;
        }
    }

    // אם לא נמצא חלק פנימי בדף, נבדוק אם יש התאמה לעמוד פרויקט חיצוני
    if (!foundSection) {
        for (let key in projectLinks) {
            if (key.toLowerCase().includes(query)) {
                window.location.href = projectLinks[key]; // מעביר לעמוד פרויקט ספציפי
                break;
            }
        }
    }
});

document.getElementById('show-more').addEventListener('click', function() {
    const additionalProjects = document.getElementById('additional-projects');
    if (additionalProjects.style.display === "none" || additionalProjects.style.display === "") {
        additionalProjects.style.display = "flex"; 
        this.innerText = "הסתר פרויקטים נוספים"; 
    } else {
        additionalProjects.style.display = "none"; 
        this.innerText = "הצג עוד פרויקטים"; 
    }
});

