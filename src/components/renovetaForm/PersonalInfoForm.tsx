type PersonalData = {
    email: string
    phone: string
    firstName: string
    lastName: string,
    address : string
    propertyName: string
    city: string

  }
  
  type PersonalFormProps = PersonalData & {
    updateFields: (fields: Partial<PersonalData>) => void
  }
  
  export function PersonalInfoForm({
    email,
    phone,
    firstName,
    lastName,
    address,
    propertyName,
    city,
    updateFields
  }: PersonalFormProps) {
    return (
      <>
      <label>Dina kontaktuppgifter</label>
        <input
          placeholder="Mejladress"
          type="email"
          value={email}
          onChange={e => updateFields({ email: e.target.value })}
        />
        <input
          placeholder="Telefonnummer"
          type="text"
          value={phone}
          onChange={e => updateFields({ phone: e.target.value })}
        />
        <input
          placeholder="Förnamn"
          type="text"
          value={firstName}
          onChange={e => updateFields({ firstName: e.target.value })}
        />
        <input
          placeholder="Efternamn"
          type="text"
          value={lastName}
          onChange={e => updateFields({ lastName: e.target.value })}
        />
        <label>Din bostad</label>
        <input
          placeholder="Adress"
          type="address"
          value={address}
          onChange={e => updateFields({ address: e.target.value })}
        />
        <input
          placeholder="Fastighetsbeteckning"
          type="text"
          value={propertyName}
          onChange={e => updateFields({ propertyName: e.target.value })}
        />
        <input
          placeholder="Ort"
          type="text"
          value={city}
          onChange={e => updateFields({ city: e.target.value })}
        />
        
  </>
    )
  }