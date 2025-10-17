    // === Atur tanggal acara di sini ===
    const targetDate = new Date("April 21, 2026 00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Hitung waktu tersisa
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Tampilkan di elemen
      document.getElementById("days").innerText = days.toString().padStart(2, '0');
      document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

      // Jika waktu habis
      if (distance < 0) {
        clearInterval(countdown);
        document.body.innerHTML = `
          <h1>🎊 Acara Dimulai! 🎉</h1>
          <p>Selamat datang di momen spesial Anda.</p>
        `;
      }
    }, 1000);