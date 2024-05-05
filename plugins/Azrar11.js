let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'ستو💙ــرـــ💙ـيـات🙈💙'
            },
            body: {
              text: 'K H A L E D S H A T A H 🖤.'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'الاوامر 🖤',
                    sections: [
                      {
                        title: 'Khaled_Shatah🖤.',
                        highlight_label: '🖤',
                        rows: [
                          {
                            header: 'القائمة',
                            title: 'الاوامر',
                            description: '',
                            id: '.menu'
                          },
                          {
                            header: 'الذكاء الصناعي',
                            title: '.ai ما هي عاصمه سوريا',
                            description: '',
                            id: '.ai'
                          },
                          {
                            header: 'تاغ جماعي',
                            title: '🖤',
                            description: '',
                            id: '.hidetag'
                          },
                          {
                            header: 'تحميل التطبيقات',
                            title: '.apk whatsapp',
                            description: '',
                            id: '.apk'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                },
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'معلومات المطور 🖤',
                    sections: [
                      {
                        title: 'Khaled_shatah🖤.',
                        highlight_label: '🖤',
                        rows: [
                          {
                            header: '.owner',
                            title: 'https://wa.me/963980677944',
                            description: '',
                            id: '.owner'
                          },
                          {
                            header: 'قناة المطور',
                            title: '.channel',
                            description: '',
                            id: '.channel'
                          },
                          {
                            header: 'تحميل اغاني',
                            title: '.song اسم الاغنيه',
                            description: '',
                            id: '.song'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['menu']

export default handler
