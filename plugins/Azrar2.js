let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*ستو💙ــرـــ💙ـيـات🙈💙*'
            },
            body: {
              text: 'اختر شيء من القائمة\nK H A L E D S H A T A H'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اختر ',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ستوريات',
                        rows: [
                          {
                            header: 'الازرار',
                            title: ' menu ',
                            description: '',
                            id: '.menu'
                      sections: [
                      {
                        title: 'List',
                        highlight_label: 'ستوريات',
                        rows: [
                      {
                            header: '👑 قناة المطور',
                            title: '.channel',
                            description: '',
                            id: '.channel'
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
handler.command = ['خالد']

export default handler
