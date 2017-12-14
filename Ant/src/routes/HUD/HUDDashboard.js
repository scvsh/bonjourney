import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {Card, Button, Icon, List} from 'antd';
import ProjectCard from '../../components/HUDComponents/ProjectCard';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import Ellipsis from '../../components/Ellipsis';

import styles from './HUDDashboard.less';
const {Meta} = Card;

@connect(state => ({
list: state.list,
}))

export default class HUDDashboard extends PureComponent {
    componentDidMount() {
        this.props.dispatch({
            type: 'list/fetch',
            payload: {
                count: 8,
            },
        });
    }

    render() {
        const {list: {list, loading}} = this.props;

        const content = (
            <div className={styles.pageHeaderContent}>
                <p>Theese are your projects</p>
                <div className={styles.contentLink}>
                    <a>
                        <img
                            alt=""
                            src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                        />{' '}
                        Total {list.length} projects
                    </a>
                    <a>
                        <img
                            alt=""
                            src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                        />{' '}
                        Testing icon
                    </a>
                    <a>
                        <img
                            alt=""
                            src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                        />{' '}
                        Testing icon
                    </a>
                </div>
            </div>
        );

        const extraContent = (
            <div className={styles.extraImg}>
                <img
                    alt="这是一个标题"
                    src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
                />
            </div>
        );

        return (
            <PageHeaderLayout
                title="HUD Dashboard"
                content={content}
                extraContent={extraContent}>
                <div className={styles.cardList}>
                    <List
                        rowKey="id"
                        loading={loading}
                        grid={{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}}
                        dataSource={['', ...list]}
                        renderItem={item =>
                            item ? (
                                <List.Item key={item.id}>
                                    <ProjectCard
                                        preview={{ link: item.avatar, alt: item.title }}
                                        title={ item.title }
                                        description={ item.description }
                                        tasks={[
                                            {id: 1, active: true},
                                            {id: 2, active: false},
                                        ]}
                                        deadline="22.10.2018"
                                        notification={true}
                                    />
                                </List.Item>
                            ) : (
                                <List.Item>
                                    <Button
                                        type="dashed"
                                        className={styles.newButton}>
                                        <Icon type="plus" /> Add project
                                    </Button>
                                </List.Item>
                            )
                        }
                    />
                </div>
            </PageHeaderLayout>
        );
    }
}
