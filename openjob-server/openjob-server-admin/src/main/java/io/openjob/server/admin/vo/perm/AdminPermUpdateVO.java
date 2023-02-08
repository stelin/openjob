package io.openjob.server.admin.vo.perm;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @author inhere
 * @since 1.0.0
 */
@Data
@ApiModel(value = "AdminPermUpdateVO", description = "AdminPermUpdateVO")
public class AdminPermUpdateVO {

    @ApiModelProperty(value = "PK")
    private Long id;

}
