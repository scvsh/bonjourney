import React, { PureComponent } from 'react';
import { Badge, Card, Progress, Icon } from 'antd';
import Ellipsis from '../../components/Ellipsis';
import styles from './ProjectCard.less';

export default class ProjectCard extends PureComponent {
    render() {
        let prefixCls = 'ant-card-meta'; 

        return (
            <Card hoverable className={styles.card} >
                <div className={ styles.content }>
                    <div className={ styles.preview }>
                        <img src="https://i01.fotocdn.net/s15/239/public_pin_l/22/2393511406.jpg" alt="" />
                    </div>
                        <div className={ styles.cardTitle }> <div className= { styles.head + ' ' + prefixCls + "-title" }>Project title </div></div>
                    <div className={ styles.notification }>
                        <Badge dot>
      <Icon type="notification" />
    </Badge>
                    </div>
                    <div className={ styles.description + ' ' + prefixCls + "-description" }>
                        <Ellipsis className={styles.item} lines={2}>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit?</Ellipsis>
                    </div>
                    <div className={ styles.progress }>
                        <Progress percent={50} status="active" />
                    </div>
                    <div className={ styles.tasks }>
                        <a><Icon className={ styles.icon } type="bars" />6 tasks | 2 active</a>
                    </div>
                    <div className={ styles.deadline }>
                        <a><Icon className={ styles.icon } type="calendar" />22.12.2018</a>
                    </div>
                </div>
            </Card>
        );
    }
}
