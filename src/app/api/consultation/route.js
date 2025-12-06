// app/api/consultation/route.js
export async function POST(req) {
  const { name, phone } = await req.json();

  const BOT_TOKEN = "8410661760:AAGE0zRPTvzVzJOvy_DjfFsqZJCLe-jmMcM";
  const CHAT_ID = "-4219352649";

  // Простая валидация
  if (!name || !phone) {
    return new Response(
      JSON.stringify({ success: false, error: "Заполните все поля" }),
      { status: 400 }
    );
  }

  // Валидация телефона
  // const phoneRegex = /^\+7\s?\(?9\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/;
  // if (!phoneRegex.test(phone)) {
  //   return new Response(
  //     JSON.stringify({ success: false, error: "Некорректный номер телефона" }),
  //     { status: 400 }
  //   );
  // }

  const text = `
📌 <b>Новая заявка на консультацию (Москва)</b>
👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
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
        text: text,
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
