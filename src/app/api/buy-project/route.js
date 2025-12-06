// app/api/buy-project/route.js
export async function POST(req) {
  const { phone, email, message, projectName } = await req.json();

  const BOT_TOKEN = "8410661760:AAGE0zRPTvzVzJOvy_DjfFsqZJCLe-jmMcM";
  const CHAT_ID = "-4219352649";

  // Валидация обязательных полей
  if (!phone || !email || !message || !projectName) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Все поля обязательны для заполнения",
      }),
      { status: 400 }
    );
  }

  // Валидация email
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailRegex.test(email)) {
  //   return new Response(
  //     JSON.stringify({ success: false, error: "Введите корректный email" }),
  //     { status: 400 }
  //   );
  // }

  // Валидация телефона (минимальная длина 5 цифр)
  // const phoneRegex = /^[\d\+][\d\s\-\(\)]{4,}$/;
  // const cleanPhone = phone.replace(/\D/g, '');
  // if (cleanPhone.length < 5 || !phoneRegex.test(phone)) {
  //   return new Response(
  //     JSON.stringify({ success: false, error: "Введите корректный номер телефона" }),
  //     { status: 400 }
  //   );
  // }

  // Валидация длины сообщения
  if (message.length < 10) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Сообщение должно содержать не менее 10 символов",
      }),
      { status: 400 }
    );
  }

  const text = `
📌 <b>Новая заявка на покупку проекта (Москва)</b>
   <b>Проект:</b> ${projectName}\n
   <b>Телефон:</b> ${phone}\n
   <b>Email:</b> ${email}\n
   <b>Сообщение:</b> ${message}
    `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке сообщения в Telegram");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
