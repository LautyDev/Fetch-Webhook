const form = document.getElementById('contentForm')
const submit = document.getElementById('submit')

form.addEventListener('submit', sendMessage)
submit.addEventListener('click', sendMessage)

async function sendMessage(a) {
    a.preventDefault()

    const input = document.getElementById('contentInput')

    await fetch('https://discord.com/api/webhooks/995432251917598822/BWYrO5hHz0o4IIL5ZQEhH62_68sQ-C5vk8LTsPKJhAkUfY9hsWyzggkoh3-WLSvYA-cU', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({ content: input.value }) 
    }).then(alert('Mensaje enviado')).catch(e => alert(e))
}