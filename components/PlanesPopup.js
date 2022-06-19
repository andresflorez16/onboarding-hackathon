import Popup from 'reactjs-popup'
import styled from 'styled-components'
import CheckLi from 'components/CheckLi'

const StyledPopup = styled(Popup)`
&-content {
  border-radius: 10px;
  width: 50%;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
}
`

export const PlanNomina = ({ open, handlePopup }) => {
  return(
    <StyledPopup open={open} onClose={handlePopup}>
      <div>
        <h2>Beneficios</h2>
        <h3>Disfruta de los beneficios de la Cuenta de Nómina para Empleados</h3>
        <ul>
          <CheckLi>Contrata sin necesidad de ir a una oficina</CheckLi>
          <CheckLi>No es necesario que tu empresa tenga convenio con BBVA</CheckLi>
          <CheckLi>Tienes acceso a más productos BBVA sin cuota de manejo</CheckLi>
          <CheckLi>Realiza pagos, transferencias y recargas sin efectivo desde BBVA móvil</CheckLi>
        </ul>
      </div>
    </StyledPopup>
  )
}

export const PlanAhorros = ({ open, handlePopup }) => {
  return(
    <StyledPopup open={open} onClose={handlePopup}>
      <div>
        <h2>Beneficios del plan de ahorro</h2>
        <h3>Disfruta de los beneficios de la Cuenta de Nómina para Empleados</h3>
        <ul>
          <CheckLi>Contrata sin necesidad de ir a una oficina</CheckLi>
          <CheckLi>No es necesario que tu empresa tenga convenio con BBVA</CheckLi>
          <CheckLi>Tienes acceso a más productos BBVA sin cuota de manejo</CheckLi>
          <CheckLi>Realiza pagos, transferencias y recargas sin efectivo desde BBVA móvil</CheckLi>
        </ul>
      </div>
    </StyledPopup>
  )
}

export const PlanTradicional = ({ open, handlePopup }) => {
  return(
    <StyledPopup open={open} onClose={handlePopup}>
      <div>
        <h2>Beneficios del plan de cuenta corriente tradicional</h2>
        <h3>Conoce las ventajas que ofrece la Cuenta Corriente Tradicional BBVA</h3>
        <ul>
          <CheckLi>Maneja tu dinero por medio de cheques, tu tarjeta débito y canales digitales</CheckLi>
          <CheckLi>Retira en ATM con token a través de BBVA móvil sin costo</CheckLi>
          <CheckLi>Consulta saldo, pagos y transferencias sin ningún costo a través de BBVA Net y BBVA Móvil</CheckLi>
          <CheckLi>Usa tu sobregiro y tendrás hasta 7 días de gracia según tu saldo promedio</CheckLi>
        </ul>
      </div>
    </StyledPopup>
  )
}

export const PlanIntereses = ({ open, handlePopup }) => {
  return(
    <StyledPopup open={open} onClose={handlePopup}>
      <div>
        <h2>Beneficios del plan de cuenta corriente con intereses</h2>
        <h3>Administra tu dinero de manera eficiente, mediante el giro de cheques, uso de tu tarjeta débito y canales digitales</h3>
        <ul>
          <CheckLi>Realiza consultas y transacciones con tu cuenta a través de BBVA móvil y BBVA net</CheckLi>
          <CheckLi>Accede a cupo de sobregiro según tu capacidad de endeudamiento</CheckLi>
          <CheckLi>Retira en cajeros automáticos con token a través de BBVA móvil sin costo</CheckLi>
          <CheckLi>Recibe intereses mensuales de acuerdo con tu saldo promedio</CheckLi>
        </ul>
      </div>
    </StyledPopup>
  )
}
