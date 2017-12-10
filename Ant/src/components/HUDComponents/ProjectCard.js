import React, {PureComponent} from 'react';
import {Avatar, Badge, Card, Progress, Icon} from 'antd';
import Ellipsis from '../../components/Ellipsis';
import styles from './ProjectCard.less';
import PropTypes from 'prop-types';

export default class ProjectCard extends PureComponent {
    render() {
        let prefixCls = 'ant-card-meta';
        let _props = this.props;

        return (
            <Card hoverable className={styles.card}>
                <div className={styles.grid}>
                    <div className={styles.wrap}>
                        <div className={styles.preview}>
                            <img
                                src={_props.preview.link}
                                alt={_props.preview.alt}
                            />
                        </div>
                        <div className={styles.content}>
                            <div
                                className={
                                    styles.head + ' ' + prefixCls + '-title'
                                }>
                                {_props.title}
                            </div>
                            {_props.notification ? (
                                <div className={styles.notification}>
                                    <Badge dot>
                                        <Icon type="notification" />
                                    </Badge>
                                </div>
                            ) : (
                                ''
                            )}
                            <div
                                className={
                                    styles.description +
                                    ' ' +
                                    prefixCls +
                                    '-description'
                                }>
                                <Ellipsis className={styles.item} lines={2}>
                                    {_props.description
                                        ? _props.description
                                        : 'No description'}
                                </Ellipsis>
                            </div>
                        </div>
                    </div>
                    <div className={styles.progress}>
                        <Progress percent={50} status="active" />
                    </div>
                    <div className={styles.tasks}>
                        <span>
                            <Ellipsis className={styles.item} lines={1}>
                                <Icon className={styles.icon} type="bars" />
                                {_props.tasks
                                    ? _props.tasks.length +
                                      ' tasks | ' +
                                      _props.tasks.filter(task => {
                                          return task.active == true;
                                      }).length +
                                      ' active'
                                    : 'Empty project'}
                            </Ellipsis>
                        </span>
                    </div>
                    <div className={styles.deadline}>
                        <Ellipsis className={styles.item} lines={1}>
                            <span>
                                <Icon className={styles.icon} type="calendar" />
                                {_props.deadline}
                            </span>
                        </Ellipsis>
                    </div>
                </div>
            </Card>
        );
    }
}

ProjectCard.propTypes = {
    preview: PropTypes.object,
    title: PropTypes.string,
    notification: PropTypes.bool,
    description: PropTypes.string,
    tasks: PropTypes.array,
    deadline: PropTypes.string,
};

ProjectCard.defaultProps = {
    preview: {
        link: 'https://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png',
        alt: 'Project Preview',
    },
    title: 'Untitled Project',
    notification: false,
    tasks: [],
    deadline: '',
};
