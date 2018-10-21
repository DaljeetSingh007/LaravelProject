<div class="modal fade" id="videoContainerInfoModal" tabindex="-1" role="dialog" aria-labelledby="videoContainerInfoModal" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    {!! trans('common.notes') !!}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"> &times;</span></button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="modal-stream-id" />
                <div id="modal-video-container" style="height:400px;width:100%"></div><!-- /#modal-video-container -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{!! trans('common.close') !!}</button>
            </div>
        </div>
    </div>
</div><!-- /#videoContainerInfoModal -->