import React from 'react';
import Button from '../../../../components/Button';
import ImageLoader from '../../../../components/Loaders/ImageLoader';
import InfoLoader from '../../../../components/Loaders/InfoLoader';
import { User } from '../../types';
import dayjs from 'dayjs';
import './styles.scss';

type Props = {
    user?: User;
    isLoading: boolean;
}

const UserInfo = ({ user, isLoading }: Props) => {
    return (
        <div className="user-info-container">
            <div className="user-info">
                <div className="user-info-avatar-content">
                    {isLoading ? (
                        <ImageLoader />
                    ) : (
                            <>
                                <img
                                    src={user?.avatar_url}
                                    alt='Avatar do usuário'
                                    className="user-info-avatar"
                                />
                                <a
                                    href={`https://github.com/${user?.login}`}
                                    target="_new"
                                >
                                    <Button text="Ver perfil" />
                                </a>
                            </>
                        )}
                </div>
                <div className="user-info-details">
                    {isLoading ? (
                        <InfoLoader />
                    ) :
                    (
                        <>
                            <div className="badges-content">
                                <span className="badge-item user-info-item">Repositórios públicos: {user?.public_repos}</span>
                                <span className="badge-item user-info-item">Seguidores: {user?.followers}</span>
                                <span className="badge-item user-info-item">Seguindo: {user?.following}</span>
                            </div>
                            <div className="user-info-content user-info-item">
                                <h3 className="user-info-title">Informações</h3>
                                <div className="user-info-details-item user-info-item">
                                    <strong>Empresa:</strong> {user?.company}
                                </div>
                                <div className="user-info-details-item user-info-item">
                                    <strong>Website/Blog:</strong> {user?.blog}
                                </div>
                                <div className="user-info-details-item user-info-item">
                                    <strong>Localidade:</strong> {user?.location}
                                </div>
                                <div className="user-info-details-item user-info-item">
                                    <strong>Membro desde:</strong> {dayjs(`${user?.created_at}`).locale('pt-br').format('DD/MM/YYYY')}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserInfo;