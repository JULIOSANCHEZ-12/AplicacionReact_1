import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Formacion Academica',
    path: '/',
    icon: <IoIcons.IoMdSchool />,
    cName: 'nav-text'
  },
  {
    title: 'Lugar de Recidencia',
    path: '/reports',
    icon: <IoIcons.IoIosHome />,
    cName: 'nav-text'
  },
  {
    title: 'Pasatiempos',
    path: '/products',
    icon: <IoIcons.IoMdBicycle />,
    cName: 'nav-text'
  }
];
