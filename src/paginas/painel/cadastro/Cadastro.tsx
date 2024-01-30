import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../../models/Usuario'
import { cadastrarUsuario } from '../../../services/Services'
import './Cadastro.css'
import NavBar from '../../../components/navbar/NavBar'
import Footer from '../../../components/footer/Footer'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    data_nascimento: '',
    cpf: '',
    foto: '',
    email: '',
    senha: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    data_nascimento: '',
    cpf: '',
    foto: '',
    email: '',
    senha: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log(usuario)

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }


  return (
    <>
    <NavBar/>
      <div className="grid h-screen grid-cols-1 font-bold lg:grid-cols-2 place-items-center">
        <div className="hidden fundoCadastro lg:block"></div>
        <form className='flex flex-col items-center justify-center w-2/3 gap-3'onSubmit={cadastrarNovoUsuario} >
          <h2 className='text-5xl text-slate-900'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="p-2 border-2 rounded border-slate-700"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Data de Nascimento</label>
            <input
              type="date"
              id="data_nascimento"
              name="data_nascimento"
              placeholder="Data de Nascimento"
              className="p-2 border-2 rounded border-slate-700"
              value={usuario.data_nascimento} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="CPF"
              className="p-2 border-2 rounded border-slate-700"
              value={usuario.cpf} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="p-2 border-2 rounded border-slate-700"
              value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              className="p-2 border-2 rounded border-slate-700"
              value={usuario.email} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="p-2 border-2 rounded border-slate-700"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="p-2 border-2 rounded border-slate-700"
              value={confirmaSenha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='w-1/2 py-2 text-white bg-red-400 rounded hover:bg-red-700' >
              Cancelar
            </button>
            <button className='w-1/2 py-2 text-white bg-indigo-400 rounded hover:bg-indigo-900' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Cadastro