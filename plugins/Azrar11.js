let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*الأوامر*'
            },
            body: {
              text: 'K H A L E D S H A T A H'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'الاوامر',
                        highlight_label: 'khaled',
                        rows: [
                          {
                            header: 'الاوامر',
                            title: '.menu',
                            description: '',
                            id: '.menu'
                          },
                                        {
                            header: 'القناه',
                            title: '.channel',
                            description: '',
                            id: '.Channel'
                          },
                          {
                            header: 'المطور',
                            title: 'المطور',
                            description: '',
                            id: '.owner'
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
handler.command = ['ستوريات']

export default handler
