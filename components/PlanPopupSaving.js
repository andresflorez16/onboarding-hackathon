import Popup from 'reactjs-popup'
import styled from 'styled-components'
import CheckLi from 'components/CheckLi'

const StyledPopup = styled(Popup)`
&-content {
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
