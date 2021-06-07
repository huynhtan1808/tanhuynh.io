export default async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name, !email, !message) {
      return res.status(400).json({ error: 'Bạn cần nhập Email' });
    }
  
    try {
      const response = await fetch(
        `https://hooks.zapier.com/hooks/catch/10286397/bbbsiae/`,
        {
          body: JSON.stringify({
            name,
            email,
            message,
            tags: ['tanhuynh.io']
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      );
  
      if (response.status >= 400) {
        const text = await response.text();
  
        if (text.includes('already subscribed')) {
          return res.status(400).json({
            error: `Bạn đã đăng ký rồi :D`
          });
        }
  
        return res.status(400).json({
          error: text
        });
      }
  
      return res.status(201).json({ error: '' });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  };