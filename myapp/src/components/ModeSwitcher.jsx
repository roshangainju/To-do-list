import React from 'react'

const ModeSwitcher = () => {
    const modeswitch=()=>{
        var element=document.body
        element.dataset.bsTheme=element.dataset.bsTheme=="light"?"dark":"light"
    }
    
  return (
    <div className="form-check form-switch">
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked"  onClick={modeswitch} />
  {/* <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label> */}
</div>
  )
}

export default ModeSwitcher