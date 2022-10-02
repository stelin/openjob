package io.openjob.server.scheduler.timer;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
@Slf4j
@Getter
@Setter
public class DelayTimerTask extends TimerTask {

    private String delayId;

    private String delayParams;

    private String delayExtra;

    private String topic;

    private String processorInfo;

    private Integer failRetryTimes;

    private Integer failRetryInterval;

    private Integer executeTimeout;

    private Integer concurrency;

    /**
     * Timer task.
     *
     * @param taskId     taskId
     * @param slotsId    slotsId
     * @param expiration expiration
     */
    public DelayTimerTask(Long taskId, Long slotsId, Long expiration) {
        super(taskId, slotsId, expiration);
    }

    @Override
    public void run() {

    }
}