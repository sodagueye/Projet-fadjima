import React from 'react'
import Carte2 from './carte2'

export default function Carteclient() {
  return (
    <div>
      <div className='flex mt-5 items-center justify-center gap-10'>

        <Carte2
          title="Inventaire"
          text="Allez dans Configuration"
          description2="298"
          description3="Nombre total de médicaments"
          description4="24"
          description5="Groupes de médecine"
        />
        <Carte2
          title="Rapport rapide"
          text="Janvier 2022"
          description2="70856"
          description3="Quantité de médicaments"
          description4="5288"
          description5="Factures générées"
        />
      </div>
      <div className='flex mt-5 items-center justify-center gap-10'>

        <Carte2
          title="Ma pharmacie"
          text="Accéder à la gestion des utilisateurs"
          description2="04"
          description3="Nombre total de fournisseurs"
          description4="05"
          description5="Nombre total d'utilisateurs"
        />

        <Carte2
          title="Clients"
          text="Aller à la page Clients"
          description2="845"
          description3="Nombre total des clients"
          description4="Adalimumab"
          description5="Article fréquemment"
        />
      </div>
    </div>
  )
}
