async function send() {

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;

  const selected = document.querySelector('input[name="educationType"]:checked');

  console.log(selected);
  console.log(selected.value);

  const educationType = selected.value;

  console.log({
    name,
    phone,
    course,
    educationType
  });

  const msg = document.getElementById("msg");

  if (!name || !phone || !course) {
    msg.innerText = "⚠ Bütün xanaları doldurun!";
    msg.style.color = "red";
    return;
  }

  msg.innerText = "Göndərilir...";
  msg.style.color = "black";

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
    name,
    phone,
    course,
    educationType
})
    });

    const data = await res.json();

    msg.innerText = data.message;

   if (res.ok) {
    msg.style.color = "green";

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("course").value = "";

    document.querySelector('input[name="educationType"][value="Onlayn"], input[name="educationType"][value="Online"]').checked = true;

} else {
    msg.style.color = "red";
}

  } catch (err) {
    msg.innerText = "Serverə qoşulmaq olmur!";
    msg.style.color = "red";
  }
}
const translations = {

    az: {
        home: "Ana Səhifə",
        about: "Haqqımızda",
        program: "Proqram",
        courses: "Kurslar",
        trainers: "Təlimçilər",
        graduates: "Məzunlar",
        career: "Karyera və Dəstək",
        register: "Qeydiyyat",
        contact: "Əlaqə",

        title: "DataPrime Academy",

        subtitle: "Dövrün Prime nümunəsi olmaq üçün sizi data səyahətinə çıxarırıq.",
        aboutTitle: "Haqqımızda",
        aboutText1: `DataPrime Academy 2024-cü ildən fəaliyyət göstərən, data analitikası və rəqəmsal bacarıqların inkişafı istiqamətində ixtisaslaşmış təlim mərkəzidir. Akademiyanın əsas məqsədi iştirakçılara nəzəri biliklərlə yanaşı praktiki bacarıqlar qazandıraraq onları müasir əmək bazarının tələblərinə uyğun peşəkar mütəxəssis kimi yetişdirməkdir.`,

aboutText2: `Tədris proqramları beynəlxalq standartlara uyğun hazırlanır və Excel, SQL, Python, Power BI, statistika və digər data analitikası alətlərini əhatə edir. Təlimlər real layihələr, praktiki tapşırıqlar və mentor dəstəyi ilə keçirilərək iştirakçıların biliklərini real iş mühitində tətbiq etməsinə şərait yaradır.`,

aboutText3: `DataPrime Academy fəaliyyətə başladığı gündən etibarən keyfiyyətli təhsil, davamlı inkişaf və tələbəyönümlü yanaşmanı əsas prinsip kimi qəbul edir. Akademiya öz fəaliyyətini peşəkar kadrların hazırlanmasına, gənclərin karyera inkişafına dəstək göstərməyə və ölkədə data sahəsinin inkişafına töhfə verməyə yönəldib.`,
        programTitle: "Proqram",
        programText1: "Online Data Analitika Təlimi data analitikası sahəsində peşəkar karyera qurmaq istəyənlər üçün hazırlanmış nəzəri və praktiki təlim proqramıdır.",
        programCard1Title: "Online Data Analitika Təlimi",
programDuration: "<b>Müddət:</b> 5 ay",
programSchedule: "<b>Dərs qrafiki:</b> Həftədə 3 dəfə",
programDays: "1, 3 və 5-ci günlər",
programTime: "<b>Saat:</b> 19:00 – 21:00",
programSubjects: "<b>Tədris olunan proqramlar</b>",

paymentTitle: "Ödəniş və Sertifikat",
totalPayment: "<b>Ümumi ödəniş:</b> 425 AZN",
monthlyPayment: "<b>Aylıq ödəniş:</b> 85 AZN",
finalExam: "Final imtahanı keçirilir.",
certificate: "Nəticəyə əsasən Data Analitika Sertifikatı təqdim olunur.",

processTitle: "Tədris Prosesi",
firstMonths: "İlk 4 Ay",
firstMonthsText: "Bütün modullar nəzəri və praktiki şəkildə tədris olunur.",

lastMonth: "Son Ay",
projectText: "✔ İlk 15 gün ərzində 5 real layihə hazırlanır.",
examText: "✔ Son 15 gün final imtahanı keçirilir.",
certificateText: "İmtahan nəticəsinə əsasən Data Analitika Sertifikatı təqdim olunur.",
        coursesTitle: "Kurslar",
        excelTitle: "Excel",
excelText1: "Məlumatların təhlili üçün güclü funksiyalar və formullardan istifadə etmək",
excelText2: "Pivot cədvəllərlə böyük məlumatları asanlıqla qurmaq və təhlil etmək",
excelText3: "Müxtəlif növ qrafik və diaqramlarla məlumatları vizuallaşdırmaq",
excelText4: "Excel data analitikasında güclü təməl yaradır",

sqlTitle: "SQL",
sqlText1: "Mürəkkəb sorğularla məlumatları təhlil etmək",
sqlText2: "Məlumat bazalarında dəyərli məlumatları çıxarmaq",
sqlText3: "Böyük həcmli məlumatları asanlıqla idarə etmək",

powerbiTitle: "Power BI & Data Analytics",
powerbiText1: "Məlumatlarınızı interaktiv dashboardlarda vizuallaşdırmaq",
powerbiText2: "Dəqiq hesabatlar hazırlayıb komandanızla paylaşmaq",
powerbiText3: "Müxtəlif məlumat mənbələrini birləşdirib analiz etmək",
powerbiText4: "Real vaxtda analitik məlumatlar əldə etmək",

pythonTitle: "Python",
pythonText1: "Data təmizlənməsi və emalı",
pythonText2: "Statistik analizlər",
pythonText3: "Maşın öyrənməsi (Scikit-learn)",
pythonText4: "Böyük məlumatlarla işləmə (Pandas, NumPy)",

        trainersTitle: "Təlimçilər",
        trainer1Name: "Nihad Məmmədli",
trainer1Job: "<b>Vəzifə:</b> Python Təlimçisi",
trainer1Exp: "<b>Təcrübə:</b> Milla Diary LLC – Data Analyst",

trainer2Name: "Ziya Hacıyev",
trainer2Job: "<b>Vəzifə:</b> Excel Təlimçisi",
trainer2Cert: "<b>Sertifikatlar:</b> Excel, SQL, Power BI",
trainer2Exp: "<b>Təcrübə:</b> ATS Food MMC – Financial Data Analyst",

trainer3Name: "Rəsul Səfərəliyev",
trainer3Job: "<b>Vəzifə:</b> Statistika, Power BI Təlimçisi",
trainer3Exp: "<b>Təcrübə:</b> PashaPay – Data Analyst",

trainer4Name: "Ayan Məmmədzadə",
trainer4Job: "<b>Vəzifə:</b> Excel Təlimçisi",
trainer4Cert: "<b>Sertifikat:</b> Microsoft Office Specialist: Excel Expert",
trainer4Exp: "<b>Təcrübə:</b> Pasha Insurance – Sales Reporting and Analytics",

trainer5Name: "Namiq Cəfərov",
trainer5Job: "<b>Vəzifə:</b> Python və SQL Təlimçisi",
trainer5Exp: "<b>Təcrübə:</b> Digital Umbrella – Data Analyst",

trainer6Name: "İsmayıl Əliyev",
trainer6Job: "<b>Vəzifə:</b> Statistika Təlimçisi",
trainer6Cert: "<b>Sertifikat:</b> MNS (Master of Natural Sciences)",
trainer6Speciality: "<b>İxtisas:</b> Data Analytics & AI",
trainer6Exp: "<b>Təcrübə:</b> ELSER LLC, MSC Shipping (BI)",
        graduatesTitle: "Məzunlar",
        graduate1Course: "<b>Məzun:</b> Microsoft Excel",
graduate1Cert: "📜 Excel Sertifikatı",

graduate2Course: "<b>Məzun:</b> Microsoft Excel",
graduate2Cert: "📜 Excel Sertifikatı",

graduate3Course: "<b>Məzun:</b> Microsoft Excel",
graduate3Cert: "📜 Excel Sertifikatı",

graduate4Course: "<b>Məzun:</b> Power BI",
graduate4Cert: "📜 Power BI Sertifikatı",

graduate5Course: "<b>Məzun:</b> Power BI",
graduate5Cert: "📜 Power BI Sertifikatı",

graduate6Course: "<b>Məzun:</b> Power BI",
graduate6Cert: "📜 Power BI Sertifikatı",

graduate7Course: "<b>Məzun:</b> Data Analyst",
graduate7Cert: "🏆 Fərqlənmə ilə məzun",

graduate8Course: "<b>Məzun:</b> Data Analyst",
graduate8Cert: "📜 Data Analyst Sertifikatı",
        careerTitle: "Karyera və Dəstək",
       career1Title: "CV Hazırlanması",
career1Text: "Peşəkar və HR standartlarına uyğun CV hazırlanması.",

career2Title: "LinkedIn Profili",
career2Text: "LinkedIn profilinin yaradılması və optimallaşdırılması.",

career3Title: "GitHub Portfolio",
career3Text: "GitHub hesabının yaradılması və layihələrin yerləşdirilməsi.",

career4Title: "Müsahibəyə Hazırlıq",
career4Text: "Texniki və HR müsahibələri üçün hazırlıq.",

career5Title: "Data Portfolio",
career5Text: "Real layihələrdən ibarət portfolio hazırlanması.",

career6Title: "Karyera Dəstəyi",
career6Text: "İş müraciətləri və karyera istiqamətləndirilməsi.",
        registerTitle: "Qeydiyyat",
        

namePlaceholder: "Ad Soyad",
phonePlaceholder: "Telefon",
courseDefault: "Kurs seç",

onlineText: "Onlayn",
offlineText: "Əyani",
educationTitle: "Tədris forması",

sendButton: "Göndər",
        contactTitle: "Əlaqə",
        contactDesc: "Bizimlə əlaqə saxlayın və ya sosial şəbəkələrdə bizi izləyin.",

addressTitle: "📍 Ünvan",
addressLine1: "28 May metrosu",
addressLine2: "Tesla Parkının yanı",
addressLine3: "Bakı, Azərbaycan",

phoneTitle: "📞 Telefon",
emailTitle: "📧 E-mail",

locationTitle: "🗺️ Konum",
socialTitle: "🌐 Bizi Sosial Şəbəkələrdə İzləyin",

copyright: "Müəllif hüquqları qorunur!<br>DataPrime Academy © 2024",
    },

    en: {
        home: "Home",
        about: "About Us",
        aboutText1: `DataPrime Academy is a training center established in 2024, specializing in data analytics and digital skills. Our main goal is to equip students with both theoretical knowledge and practical experience, preparing them to become professionals who meet the demands of today's job market.`,

aboutText2: `Our training programs follow international standards and cover Excel, SQL, Python, Power BI, Statistics, and other data analytics tools. Students gain hands-on experience through real projects, practical assignments, and mentor support.`,

aboutText3: `Since its establishment, DataPrime Academy has been committed to quality education, continuous development, and a student-centered approach. The academy supports professional development, career growth, and contributes to the advancement of data analytics in the country.`,
        program: "Program",
        programText1: "The Online Data Analytics Training is a theoretical and practical program designed for those who want to build a professional career in data analytics.",
        programCard1Title: "Online Data Analytics Training",
programDuration: "<b>Duration:</b> 5 months",
programSchedule: "<b>Schedule:</b> 3 days a week",
programDays: "Days 1, 3 and 5",
programTime: "<b>Time:</b> 19:00 – 21:00",
programSubjects: "<b>Programs Taught</b>",

paymentTitle: "Payment and Certificate",
totalPayment: "<b>Total Fee:</b> 425 AZN",
monthlyPayment: "<b>Monthly Fee:</b> 85 AZN",
finalExam: "A final exam is conducted.",
certificate: "A Data Analytics Certificate is awarded based on the results.",

processTitle: "Training Process",
firstMonths: "First 4 Months",
firstMonthsText: "All modules are taught through both theory and practice.",

lastMonth: "Final Month",
projectText: "✔ During the first 15 days, 5 real projects are completed.",
examText: "✔ During the last 15 days, the final exam is held.",
certificateText: "A Data Analytics Certificate is awarded based on the exam results.",
        courses: "Courses",
        excelTitle: "Excel",
excelText1: "Use powerful functions and formulas for data analysis",
excelText2: "Analyze large datasets with Pivot Tables",
excelText3: "Visualize data using charts and graphs",
excelText4: "Build a strong foundation in data analytics with Excel",

sqlTitle: "SQL",
sqlText1: "Analyze data using advanced queries",
sqlText2: "Extract valuable information from databases",
sqlText3: "Manage large datasets efficiently",

powerbiTitle: "Power BI & Data Analytics",
powerbiText1: "Visualize your data with interactive dashboards",
powerbiText2: "Create accurate reports and share them with your team",
powerbiText3: "Combine and analyze data from multiple sources",
powerbiText4: "Gain real-time business insights",

pythonTitle: "Python",
pythonText1: "Data cleaning and processing",
pythonText2: "Statistical analysis",
pythonText3: "Machine Learning (Scikit-learn)",
pythonText4: "Working with big data (Pandas, NumPy)",
        trainers: "Trainers",
        trainer1Name: "Nihad Mammadli",
trainer1Job: "<b>Position:</b> Python Instructor",
trainer1Exp: "<b>Experience:</b> Milla Diary LLC – Data Analyst",

trainer2Name: "Ziya Hajiyev",
trainer2Job: "<b>Position:</b> Excel Instructor",
trainer2Cert: "<b>Certificates:</b> Excel, SQL, Power BI",
trainer2Exp: "<b>Experience:</b> ATS Food MMC – Financial Data Analyst",

trainer3Name: "Resul Safaraliyev",
trainer3Job: "<b>Position:</b> Statistics & Power BI Instructor",
trainer3Exp: "<b>Experience:</b> PashaPay – Data Analyst",

trainer4Name: "Ayan Mammadzade",
trainer4Job: "<b>Position:</b> Excel Instructor",
trainer4Cert: "<b>Certificate:</b> Microsoft Office Specialist: Excel Expert",
trainer4Exp: "<b>Experience:</b> Pasha Insurance – Sales Reporting and Analytics",

trainer5Name: "Namiq Jafarov",
trainer5Job: "<b>Position:</b> Python & SQL Instructor",
trainer5Exp: "<b>Experience:</b> Digital Umbrella – Data Analyst",

trainer6Name: "Ismayil Aliyev",
trainer6Job: "<b>Position:</b> Statistics Instructor",
trainer6Cert: "<b>Certificate:</b> MNS (Master of Natural Sciences)",
trainer6Speciality: "<b>Specialization:</b> Data Analytics & AI",
trainer6Exp: "<b>Experience:</b> ELSER LLC, MSC Shipping (BI)",
        graduates: "Graduates",
        graduate1Course: "<b>Graduate:</b> Microsoft Excel",
graduate1Cert: "📜 Excel Certificate",

graduate2Course: "<b>Graduate:</b> Microsoft Excel",
graduate2Cert: "📜 Excel Certificate",

graduate3Course: "<b>Graduate:</b> Microsoft Excel",
graduate3Cert: "📜 Excel Certificate",

graduate4Course: "<b>Graduate:</b> Power BI",
graduate4Cert: "📜 Power BI Certificate",

graduate5Course: "<b>Graduate:</b> Power BI",
graduate5Cert: "📜 Power BI Certificate",

graduate6Course: "<b>Graduate:</b> Power BI",
graduate6Cert: "📜 Power BI Certificate",

graduate7Course: "<b>Graduate:</b> Data Analyst",
graduate7Cert: "🏆 Graduated with Distinction",

graduate8Course: "<b>Graduate:</b> Data Analyst",
graduate8Cert: "📜 Data Analyst Certificate",
        career: "Career & Support",
        career1Title: "CV Preparation",
career1Text: "Professional CV preparation according to HR standards.",

career2Title: "LinkedIn Profile",
career2Text: "Creating and optimizing a LinkedIn profile.",

career3Title: "GitHub Portfolio",
career3Text: "Creating a GitHub account and uploading projects.",

career4Title: "Interview Preparation",
career4Text: "Preparation for technical and HR interviews.",

career5Title: "Data Portfolio",
career5Text: "Creating a portfolio based on real projects.",

career6Title: "Career Support",
career6Text: "Job application support and career guidance.",

        register: "Registration",
        registerTitle: "Registration",

namePlaceholder: "Full Name",
phonePlaceholder: "Phone Number",
courseDefault: "Select Course",

onlineText: "Online",
offlineText: "Offline",
educationTitle: "Education Type",

sendButton: "Send",
       contactDesc: "Contact us or follow us on social media.",

addressTitle: "📍 Address",
addressLine1: "28 May Metro Station",
addressLine2: "Next to Tesla Park",
addressLine3: "Baku, Azerbaijan",

phoneTitle: "📞 Phone",
emailTitle: "📧 E-mail",

locationTitle: "🗺️ Location",
socialTitle: "🌐 Follow Us on Social Media",

copyright: "All rights reserved!<br>DataPrime Academy © 2024",
        title: "DataPrime Academy",

        subtitle: "We take you on a data journey to become the Prime example of the modern era.",
        aboutTitle: "About Us",
        programTitle: "Program",
        coursesTitle: "Courses",
        trainersTitle: "Trainers",
        graduatesTitle: "Graduates",
        careerTitle: "Career & Support",
        registerTitle: "Registration",
        contactTitle: "Contact",
    }

};
function changeLanguage(lang){

    localStorage.setItem("language", lang);

    const t = translations[lang];

    document.getElementById("nav-home").innerText = t.home;
    document.getElementById("nav-about").innerText = t.about;
   document.getElementById("about-text1").innerHTML = t.aboutText1;
   document.getElementById("about-text2").innerHTML = t.aboutText2;
    document.getElementById("about-text3").innerHTML = t.aboutText3;
    document.getElementById("nav-program").innerText = t.program;
    document.getElementById("program-text1").innerText = t.programText1;
    document.getElementById("program-card1-title").innerText = t.programCard1Title;
document.getElementById("program-duration").innerHTML = t.programDuration;
document.getElementById("program-schedule").innerHTML = t.programSchedule;
document.getElementById("program-days").innerText = t.programDays;
document.getElementById("program-time").innerHTML = t.programTime;
document.getElementById("program-subjects").innerHTML = t.programSubjects;

document.getElementById("payment-title").innerText = t.paymentTitle;
document.getElementById("total-payment").innerHTML = t.totalPayment;
document.getElementById("monthly-payment").innerHTML = t.monthlyPayment;
document.getElementById("final-exam").innerText = t.finalExam;
document.getElementById("certificate").innerText = t.certificate;

document.getElementById("process-title").innerText = t.processTitle;
document.getElementById("first-months").innerText = t.firstMonths;
document.getElementById("first-months-text").innerText = t.firstMonthsText;

document.getElementById("last-month").innerText = t.lastMonth;
document.getElementById("project-text").innerText = t.projectText;
document.getElementById("exam-text").innerText = t.examText;
document.getElementById("certificate-text").innerText = t.certificateText;
    document.getElementById("nav-courses").innerText = t.courses;
    document.getElementById("excel-title").innerText = t.excelTitle;
document.getElementById("excel-text1").innerText = t.excelText1;
document.getElementById("excel-text2").innerText = t.excelText2;
document.getElementById("excel-text3").innerText = t.excelText3;
document.getElementById("excel-text4").innerText = t.excelText4;

document.getElementById("sql-title").innerText = t.sqlTitle;
document.getElementById("sql-text1").innerText = t.sqlText1;
document.getElementById("sql-text2").innerText = t.sqlText2;
document.getElementById("sql-text3").innerText = t.sqlText3;

document.getElementById("powerbi-title").innerText = t.powerbiTitle;
document.getElementById("powerbi-text1").innerText = t.powerbiText1;
document.getElementById("powerbi-text2").innerText = t.powerbiText2;
document.getElementById("powerbi-text3").innerText = t.powerbiText3;
document.getElementById("powerbi-text4").innerText = t.powerbiText4;

document.getElementById("python-title").innerText = t.pythonTitle;
document.getElementById("python-text1").innerText = t.pythonText1;
document.getElementById("python-text2").innerText = t.pythonText2;
document.getElementById("python-text3").innerText = t.pythonText3;
document.getElementById("python-text4").innerText = t.pythonText4;
    document.getElementById("nav-trainers").innerText = t.trainers;
document.getElementById("trainer1-name").innerText = t.trainer1Name;
document.getElementById("trainer1-job").innerHTML = t.trainer1Job;
document.getElementById("trainer1-exp").innerHTML = t.trainer1Exp;

document.getElementById("trainer2-name").innerText = t.trainer2Name;
document.getElementById("trainer2-job").innerHTML = t.trainer2Job;
document.getElementById("trainer2-cert").innerHTML = t.trainer2Cert;
document.getElementById("trainer2-exp").innerHTML = t.trainer2Exp;

document.getElementById("trainer3-name").innerText = t.trainer3Name;
document.getElementById("trainer3-job").innerHTML = t.trainer3Job;
document.getElementById("trainer3-exp").innerHTML = t.trainer3Exp;

document.getElementById("trainer4-name").innerText = t.trainer4Name;
document.getElementById("trainer4-job").innerHTML = t.trainer4Job;
document.getElementById("trainer4-cert").innerHTML = t.trainer4Cert;
document.getElementById("trainer4-exp").innerHTML = t.trainer4Exp;

document.getElementById("trainer5-name").innerText = t.trainer5Name;
document.getElementById("trainer5-job").innerHTML = t.trainer5Job;
document.getElementById("trainer5-exp").innerHTML = t.trainer5Exp;

document.getElementById("trainer6-name").innerText = t.trainer6Name;
document.getElementById("trainer6-job").innerHTML = t.trainer6Job;
document.getElementById("trainer6-cert").innerHTML = t.trainer6Cert;
document.getElementById("trainer6-speciality").innerHTML = t.trainer6Speciality;
document.getElementById("trainer6-exp").innerHTML = t.trainer6Exp;

    document.getElementById("nav-graduates").innerText = t.graduates;
document.getElementById("graduate1-course").innerHTML = t.graduate1Course;
document.getElementById("graduate1-cert").innerHTML = t.graduate1Cert;

document.getElementById("graduate2-course").innerHTML = t.graduate2Course;
document.getElementById("graduate2-cert").innerHTML = t.graduate2Cert;

document.getElementById("graduate3-course").innerHTML = t.graduate3Course;
document.getElementById("graduate3-cert").innerHTML = t.graduate3Cert;

document.getElementById("graduate4-course").innerHTML = t.graduate4Course;
document.getElementById("graduate4-cert").innerHTML = t.graduate4Cert;

document.getElementById("graduate5-course").innerHTML = t.graduate5Course;
document.getElementById("graduate5-cert").innerHTML = t.graduate5Cert;

document.getElementById("graduate6-course").innerHTML = t.graduate6Course;
document.getElementById("graduate6-cert").innerHTML = t.graduate6Cert;

document.getElementById("graduate7-course").innerHTML = t.graduate7Course;
document.getElementById("graduate7-cert").innerHTML = t.graduate7Cert;

document.getElementById("graduate8-course").innerHTML = t.graduate8Course;
document.getElementById("graduate8-cert").innerHTML = t.graduate8Cert;
    document.getElementById("nav-career").innerText = t.career;
   document.getElementById("career1-title").innerText = t.career1Title;
document.getElementById("career1-text").innerText = t.career1Text;

document.getElementById("career2-title").innerText = t.career2Title;
document.getElementById("career2-text").innerText = t.career2Text;

document.getElementById("career3-title").innerText = t.career3Title;
document.getElementById("career3-text").innerText = t.career3Text;

document.getElementById("career4-title").innerText = t.career4Title;
document.getElementById("career4-text").innerText = t.career4Text;

document.getElementById("career5-title").innerText = t.career5Title;
document.getElementById("career5-text").innerText = t.career5Text;

document.getElementById("career6-title").innerText = t.career6Title;
document.getElementById("career6-text").innerText = t.career6Text;
    document.getElementById("nav-register").innerText = t.register;
    document.getElementById("nav-contact").innerText = t.contact;

    document.getElementById("title").innerText = t.title;
    document.getElementById("subtitle").innerText = t.subtitle;
    document.getElementById("about-title").innerText = t.aboutTitle;
    document.getElementById("program-title").innerText = t.programTitle;
    document.getElementById("courses-title").innerText = t.coursesTitle;
    document.getElementById("trainers-title").innerText = t.trainersTitle;
    document.getElementById("graduates-title").innerText = t.graduatesTitle;
    document.getElementById("career-title").innerText = t.careerTitle;
    document.getElementById("register-title").innerText = t.registerTitle;
    document.getElementById("name").placeholder = t.namePlaceholder;
document.getElementById("phone").placeholder = t.phonePlaceholder;

document.getElementById("course").options[0].text = t.courseDefault;

document.getElementById("education-title").innerText = t.educationTitle;
document.getElementById("online-text").innerText = t.onlineText;
document.getElementById("offline-text").innerText = t.offlineText;
document.querySelector('input[name="educationType"][value="Onlayn"], input[name="educationType"][value="Online"]').value =
lang === "az" ? "Onlayn" : "Online";

document.querySelector('input[name="educationType"][value="Əyani"], input[name="educationType"][value="Offline"]').value =
lang === "az" ? "Əyani" : "Offline";
document.getElementById("send-btn").innerText = t.sendButton;
    document.getElementById("contact-title").innerText = t.contactTitle;
    document.getElementById("contact-desc").innerText = t.contactDesc;

document.getElementById("address-title").innerText = t.addressTitle;
document.getElementById("address-line1").innerText = t.addressLine1;
document.getElementById("address-line2").innerText = t.addressLine2;
document.getElementById("address-line3").innerText = t.addressLine3;

document.getElementById("phone-title").innerText = t.phoneTitle;
document.getElementById("email-title").innerText = t.emailTitle;

document.getElementById("location-title").innerText = t.locationTitle;
document.getElementById("social-title").innerText = t.socialTitle;

document.getElementById("copyright").innerHTML = t.copyright;
}
window.onload = function(){

    const lang = localStorage.getItem("language") || "az";

    changeLanguage(lang);
}