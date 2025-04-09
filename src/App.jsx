import { useState } from 'react'

export default function AquaGestor() {
  const [pedido, setPedido] = useState('')
  const [endereco, setEndereco] = useState('')
  const [pagamento, setPagamento] = useState('')

  const gerarMensagem = () => {
    return `Pedido: ${pedido}\nEndereço: ${endereco}\nPagamento: ${pagamento}`
  }

  const abrirWhatsApp = () => {
    const msg = encodeURIComponent(gerarMensagem())
    const telefone = '5599999999999' // Substitua pelo número do cliente
    window.open(`https://wa.me/${telefone}?text=${msg}`, '_blank')
  }

  const imprimir = () => {
    const conteudo = gerarMensagem()
    const janela = window.open('', '_blank')
    janela.document.write('<pre>' + conteudo + '</pre>')
    janela.print()
    janela.close()
  }

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>AquaGestor Web</h1>
      <input
        placeholder="Produtos (ex: 2 águas)"
        value={pedido}
        onChange={e => setPedido(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <textarea
        placeholder="Endereço ou Condomínio, Bloco, AP"
        value={endereco}
        onChange={e => setEndereco(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <input
        placeholder="Forma de Pagamento"
        value={pagamento}
        onChange={e => setPagamento(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={abrirWhatsApp}>Enviar para WhatsApp</button>
        <button onClick={imprimir}>Imprimir Notinha</button>
      </div>
    </div>
  )
}